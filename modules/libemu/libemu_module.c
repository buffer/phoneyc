/* -*- Mode: C; tab-width: 4; indent-tabs-mode: nil; c-basic-offset: 4 -*-
 *
 * Modified by Z. Chen <czj.pub@gmail.com>
 *
 * This file is part of the PHoneyC project, released under the GPL license.
 *
 * This file is originally written by Georg Wicherski, Z. Chen has added some
 * feature to support shellcode analysis in PHoneyC.
 *

********************************************************************************
*                               libemu
*
*                    - x86 shellcode emulation -
*
*
* Copyright (C) 2007  Georg Wicherski
* 
* This program is free software; you can redistribute it and/or
* modify it under the terms of the GNU General Public License
* as published by the Free Software Foundation; either version 2
* of the License, or (at your option) any later version.
* 
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
* 
* You should have received a copy of the GNU General Public License
* along with this program; if not, write to the Free Software
* Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
* 
* 
*             contact gw@mwcollect.org 
*
*******************************************************************************/
 

#include <Python.h>
#include <emu/emu.h>
#include <emu/emu_shellcode.h>
#include <emu/emu_memory.h>
#include <emu/emu_cpu.h>
#include <emu/emu_log.h>
#include <emu/emu_cpu_data.h>
#include <emu/emu_cpu_stack.h>
#include <emu/environment/emu_profile.h>
#include <emu/environment/emu_env.h>
#include <emu/environment/win32/emu_env_w32.h>
#include <emu/environment/win32/emu_env_w32_dll.h>
#include <emu/environment/win32/emu_env_w32_dll_export.h>
#include <emu/environment/win32/env_w32_dll_export_kernel32_hooks.h>

#include <stdio.h>


typedef struct
{
	PyObject_HEAD
	
	struct emu * emulator;
} libemu_EmulatorObject;


/*=================== surpport for shellcode analysis  =================
 *
 */

uint32_t user_hook_URLDownloadToFile(struct emu_env *env, struct emu_env_hook *hook, ...)
{
	//printf("DEBUG: Hook me Captain Cook!\n");
	//printf("DEBUG: %s:%i %s\n",__FILE__,__LINE__,__FUNCTION__);

	va_list vl;
	va_start(vl, hook);

	/*void * pCaller    = */(void)va_arg(vl, void *);
	char * szURL      = va_arg(vl, char *);
	char * szFileName = va_arg(vl, char *);
	/*int    dwReserved = */(void)va_arg(vl, int   );
	/*void * lpfnCB     = */(void)va_arg(vl, void *);

	va_end(vl);

    //printf("DEBUG: download %s -> %s\n", szURL, szFileName);
	return 0;
}


#define CODE_OFFSET 0x417000


int getpctest(const char *opts_scode,uint32_t opts_size)
{
	struct emu *e = emu_new();
    int opts_offset;
        
	if ( (opts_offset = emu_shellcode_test(e, (uint8_t *)opts_scode, opts_size)) >= 0 )
    {}//printf("DEBUG: %s offset = 0x%08x\n","SUCCESS", opts_offset);
	else
    {}//printf("DEBUG: FAILED retvar:%d\n",opts_offset);

	emu_free(e);

	return opts_offset;
}


PyObject* py_emu_profile_argument(struct emu_profile_argument *argument, int indent)
{
//	printf("%s %s = ", indents(indent), argument->argname);
    PyObject *ret = NULL;
	switch(argument->render)
	{
	case render_struct:
        ret = NULL;
        PyObject *structlist = PyList_New(0);

        struct emu_profile_argument *argumentit;
		for (argumentit = emu_profile_arguments_first(argument->value.tstruct.arguments); 
			  !emu_profile_arguments_istail(argumentit); 
			  argumentit = emu_profile_arguments_next(argumentit))
		{
            PyObject *retval = py_emu_profile_argument(argumentit,indent+1);
			PyList_Append(structlist,
                          retval);
            Py_DECREF(retval);
            retval = NULL;
		}

        ret = Py_BuildValue("ssO",
                            argument->argtype,
                            argument->argname,
                            structlist);
        Py_DECREF(structlist);
        structlist=NULL;
        
		break;

	case render_array:
        ret = NULL;
        PyObject *arraylist = PyList_New(0);
		for (argumentit = emu_profile_arguments_first(argument->value.tstruct.arguments); 
			  !emu_profile_arguments_istail(argumentit); 
			  argumentit = emu_profile_arguments_next(argumentit))
		{
            PyObject *retval = py_emu_profile_argument(argumentit,indent+1);
			PyList_Append(arraylist,
                          retval);
            Py_DECREF(retval);
            retval = NULL;
		}

        ret = Py_BuildValue("ssO",
                            argument->argtype,
                            argument->argname,
                            arraylist);
        Py_DECREF(arraylist);
        structlist=NULL;
        
		break;

	case render_int:
        ret = Py_BuildValue("ssi",
                            argument->argtype,
                            argument->argname,
                            argument->value.tint);                            
		break;

	case render_short:
        ret = Py_BuildValue("ssi",
                            argument->argtype,
                            argument->argname,
                            argument->value.tshort);
		break;

	case render_string:
        ret = Py_BuildValue("sss",
                            argument->argtype,
                            argument->argname,
                            argument->value.tchar);
		break;

	case render_bytea:
        ret = Py_BuildValue("sss",
                            argument->argtype,
                            argument->argname,
                            ".binary.");
		break;

	case render_ptr:
		{
			struct emu_profile_argument *argit = argument;
			while (argit->render == render_ptr)
			{
				argit = argit->value.tptr.ptr;
			}

            PyObject *tptr = py_emu_profile_argument(argument->value.tptr.ptr, indent+1);
            
            ret = Py_BuildValue("ssO",
                                argument->argtype,
                                argument->argname,
                                tptr);
            Py_DECREF(tptr);
            tptr = NULL;
		}
		break;

	case render_ip:
        ret = Py_BuildValue("sss",
                            argument->argtype,
                            argument->argname,
                            inet_ntoa(*(struct in_addr *)&argument->value.tint));
		break;

	case render_port:
        ret = Py_BuildValue("ssi",
                            argument->argtype,
                            argument->argname,
                            (uint16_t)argument->value.tint);
		break;

	case render_none:
        Py_INCREF(Py_None);
		ret = Py_None;
		break;
    default:
        fprintf(stderr,"WARNING: Shouldn't be here, in libemu_module.c, py_emu_profile_argument\n");
        Py_INCREF(Py_None);
		ret = Py_None;        
	}
    return ret;
}


PyObject * py_emu_profile_function(struct emu_profile_function *function)
{
    PyObject *arguments = PyList_New(0);
	struct emu_profile_argument *argument;
	for (argument = emu_profile_arguments_first(function->arguments); 
		  !emu_profile_arguments_istail(argument); 
		  argument = emu_profile_arguments_next(argument))
	{
        PyObject *item = py_emu_profile_argument(argument,1);
		PyList_Append(arguments, item);
        Py_DECREF(item);
        item = NULL;
	}

    PyObject * retval = NULL;
	switch (function->return_value->render)
	{
	case render_none:
        Py_INCREF(Py_None);
		retval = Py_None;
		break;
	case render_int:
		retval = Py_BuildValue("i", function->return_value->value.tint);
		break;

	case render_ptr:
		retval = Py_BuildValue("i", function->return_value->value.tptr.addr);
		break;
	default:
        Py_INCREF(Py_None);
		retval = Py_None;
	}
    PyObject *ret = NULL;
    ret = Py_BuildValue("{s:s,s:s,s:O,s:O}",
                        "name",
                        function->fnname,
                        "rettype",
                        function->return_value->argtype,
                        "retval",
                        retval,
                        "arguments",
                        arguments);
    Py_DECREF(retval);
    retval = NULL;
    Py_DECREF(arguments);
    arguments = NULL;
    return ret;
}

PyObject * py_emu_profile(struct emu_profile *profile)
{
    PyObject *profilelist = PyList_New(0);
	struct emu_profile_function *function;
	for (function = emu_profile_functions_first(profile->functions); !emu_profile_functions_istail(function); function = emu_profile_functions_next(function))
	{
        PyObject *item = py_emu_profile_function(function);
        PyList_Append(profilelist,item);
        Py_DECREF(item);
        item = NULL;
	}
    return profilelist;
}


PyObject* run_shellcode(struct emu* e,
                        struct emu_env* env,
                        const char *opts_scode,
                        uint32_t opts_size,
                        int opts_offset,
                        uint32_t opts_steps)
{
    
	struct emu_cpu *cpu = emu_cpu_get(e);

    int j=0;

	int ret; 
	uint32_t eipsave = 0;
        
	for ( j=0;j<opts_steps;j++ )
	{
        //emu_log_level_set(emu_logging_get(e),EMU_LOG_DEBUG);
        //emu_cpu_debug_print(cpu);
        //emu_log_level_set(emu_logging_get(e),EMU_LOG_NONE);

		if ( cpu->repeat_current_instr == false )
			eipsave = emu_cpu_eip_get(emu_cpu_get(e));

		struct emu_env_hook *hook = NULL;

		ret = 0;

		hook = emu_env_w32_eip_check(env);

		if ( hook != NULL )
		{
            if ( hook->hook.win->fnhook == NULL )
			{
				fprintf(stderr,"unhooked call to %s\n", hook->hook.win->fnname);
				break;
			}
                        
		}
		else
		{

			ret = emu_cpu_parse(emu_cpu_get(e));
                        
            emu_log_level_set(emu_logging_get(e),EMU_LOG_DEBUG);
            logDebug(e, "%s\n", cpu->instr_string);
            emu_log_level_set(emu_logging_get(e),EMU_LOG_NONE);

			struct emu_env_hook *hook =NULL;

			if ( ret != -1 )
			{
				if ( hook == NULL )
				{
                    emu_log_level_set(emu_logging_get(e),EMU_LOG_DEBUG);
                    ret = emu_cpu_step(emu_cpu_get(e));
                    emu_log_level_set(emu_logging_get(e),EMU_LOG_NONE);
				}
				else
				{
                    fprintf(stderr,"DEBUG: Why here?\n");
					/* if ( hook->hook.lin->fnhook  */
					/* 	hook->hook.lin->fnhook(env, hook); */
					/* else */
					/* 	break; */
				}
			}

			if ( ret == -1 )
			{
				//printf("cpu error %s\n", emu_strerror(e));
				break;
			}
		}
	}

	//printf("stepcount %i\n",j);

	//emu_profile_debug(env->profile);//Print profile
    PyObject *r = py_emu_profile(env->profile);
    return r;
}

PyObject* prepare_and_run_shellcode(struct emu* e,
                                    const char *opts_scode,
                                    uint32_t opts_size,
                                    int opts_offset,
                                    uint32_t opts_steps)
{
	struct emu_cpu *cpu = emu_cpu_get(e);
	struct emu_memory *mem = emu_memory_get(e);
	struct emu_env *env = emu_env_new(e);
	env->profile = emu_profile_new();
	//printf("DEBUG: emulating shellcode size %d",opts_size);

	int j;
	for ( j=0;j<8;j++ )
	{
		emu_cpu_reg32_set(cpu,j , 0);
	}

	/* write the code to the offset */
	int static_offset = CODE_OFFSET;
	emu_memory_write_block(mem, static_offset, (char *)opts_scode,  opts_size);



	/* set eip to the code */
	emu_cpu_eip_set(emu_cpu_get(e), static_offset + opts_offset);

	emu_memory_write_block(mem, 0x0012fe98, (char *)opts_scode,  opts_size);
	emu_cpu_reg32_set(emu_cpu_get(e), esp, 0x0012fe98);

	emu_memory_write_dword(mem, 0xef787c3c,  4711);
	emu_memory_write_dword(mem, 0x0,  4711);
	emu_memory_write_dword(mem, 0x00416f9a,  4711);
	emu_memory_write_dword(mem, 0x0044fcf7, 4711);
	emu_memory_write_dword(mem, 0x00001265, 4711);
	emu_memory_write_dword(mem, 0x00002583, 4711);
	emu_memory_write_dword(mem, 0x00e000de, 4711);
	emu_memory_write_dword(mem, 0x01001265, 4711);
	emu_memory_write_dword(mem, 0x8a000066, 4711);

	/* set the flags */
	emu_cpu_eflags_set(cpu, 0);

	/* IAT for sqlslammer */
	emu_memory_write_dword(mem, 0x42AE1018, 0x7c801D77);
	emu_memory_write_dword(mem, 0x42ae1010, 0x7c80ADA0);
	emu_memory_write_dword(mem, 0x7c80ADA0, 0x51EC8B55);

	if ( env == NULL )
	{
		fprintf(stderr,"%s \n", emu_strerror(e));
		fprintf(stderr,"%s \n", strerror(emu_errno(e)));
	    goto error;
	}

	emu_env_w32_load_dll(env->env.win, "urlmon.dll");
    emu_env_w32_export_hook(env, "URLDownloadToFileA", user_hook_URLDownloadToFile, NULL);

    return run_shellcode(e, env, opts_scode, opts_size,  opts_offset, opts_steps);

error:
    Py_INCREF(Py_None);
    return Py_None;
}


static PyObject * libemu_Emulator_new(PyTypeObject * type, PyObject * args,
                                      PyObject * kwds)
{
	libemu_EmulatorObject * self;
	
	self = (libemu_EmulatorObject *) type->tp_alloc(type, 0);
	
	if(self)
	{
		self->emulator = emu_new();
		
		if(!self->emulator)
		{
			Py_DECREF(self);
			return NULL;
		}
	}	
	
	return (PyObject *) self;
}

static void libemu_Emulator_dealloc(libemu_EmulatorObject * self)
{
	if(self->emulator)
	{
		emu_free(self->emulator);
		self->emulator = 0;
	}

	self->ob_type->tp_free((PyObject*) self);
}

static PyObject * libemu_Emulator_test(libemu_EmulatorObject * self,
                                       PyObject * args, PyObject * kwds)
{
	int length, result;
	const char * buffer;
	
	if(!PyArg_ParseTuple(args, "s#", &buffer, &length))
		return NULL;
	
	if(!self->emulator)
		return NULL;
	
	result = emu_shellcode_test(self->emulator, (uint8_t *) buffer, length);
	
	if(result == -1)
		Py_RETURN_NONE;
	
	return Py_BuildValue("i", result);
}

static PyObject * libemu_Emulator_run_shellcode(libemu_EmulatorObject * self,
                                                PyObject * args, PyObject * kwds)
{
    const char * shellcode;
    int sc_size;
    int offset = -1;
    int steps = 1000000;
    PyObject *ret = NULL;

    if(!PyArg_ParseTuple(
           args, 
           "s#|i",
           &shellcode,
           &sc_size,
           &offset
           )) goto end;

    if(!self->emulator)
		goto end;
    
    if(offset == -1)
        offset =  getpctest(shellcode,sc_size);
    
    ret = prepare_and_run_shellcode(self->emulator, shellcode, sc_size, offset, steps);

end:
    if(ret == NULL)
    {
        ret = Py_None;
        Py_INCREF(ret);
    }
    
    return ret;

}

static PyMethodDef libemu_EmulatorMethods[] = {
	{ "test", (PyCFunction) libemu_Emulator_test, METH_VARARGS,
      "test(buf)\nTest a given buffer for presence of shellcode." },
	{ "run_shellcode", (PyCFunction) libemu_Emulator_run_shellcode, METH_VARARGS,
      "run_shellcode(buf[,offset])\nRun shellcode and return the profile in a dict" },
	{ NULL, NULL, 0, NULL },
};

static PyTypeObject libemu_EmulatorType =
{
    PyObject_HEAD_INIT(NULL)
    0,                         /*ob_size*/
    "libemu.Emulator",             /*tp_name*/
    sizeof(libemu_EmulatorObject),             /*tp_basicsize*/
    0,                         /*tp_itemsize*/
    (destructor) libemu_Emulator_dealloc, /*tp_dealloc*/
    0,                         /*tp_print*/
    0,                         /*tp_getattr*/
    0,                         /*tp_setattr*/
    0,                         /*tp_compare*/
    0,                         /*tp_repr*/
    0,                         /*tp_as_number*/
    0,                         /*tp_as_sequence*/
    0,                         /*tp_as_mapping*/
    0,                         /*tp_hash */
    0,                         /*tp_call*/
    0,                         /*tp_str*/
    0,                         /*tp_getattro*/
    0,                         /*tp_setattro*/
    0,                         /*tp_as_buffer*/
    Py_TPFLAGS_DEFAULT, /*tp_flags*/
    "libemu x86 emulator wrapper object",           /* tp_doc */
    0,		               /* tp_traverse */
    0,		               /* tp_clear */
    0,		               /* tp_richcompare */
    0,		               /* tp_weaklistoffset */
    0,		               /* tp_iter */
    0,		               /* tp_iternext */
    libemu_EmulatorMethods,             /* tp_methods */
    0,             /* tp_members */
    0,                         /* tp_getset */
    0,                         /* tp_base */
    0,                         /* tp_dict */
    0,                         /* tp_descr_get */
    0,                         /* tp_descr_set */
    0,                         /* tp_dictoffset */
    0,      /* tp_init */
    0,                         /* tp_alloc */
    libemu_Emulator_new,                 /* tp_new */
};

static PyMethodDef LibemuMethods[] = {
	{ NULL, NULL, 0, NULL }
};

PyMODINIT_FUNC initlibemu()
{
	PyObject * module;
	
	if(PyType_Ready(&libemu_EmulatorType) < 0)
		return;
	
	module = Py_InitModule3("libemu", LibemuMethods,
                            "libemu x86 emulator wrapper module");
	
	Py_INCREF(&libemu_EmulatorType);
	PyModule_AddObject(module, "Emulator", (PyObject *) &libemu_EmulatorType);
}


