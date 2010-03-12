/* -*- Mode: C; tab-width: 4; indent-tabs-mode: nil; c-basic-offset: 4 -*-
 *
 * Copyright 2009 Z. Chen <czj.pub@gmail.com>
 *
 * This file is part of the honeyjs package for PHoneyC, released under the
 * MIT license.
 *
 */
#include "spidermonkey.h"

#include <math.h>


#include <jsinterp.h>

#include <emu/emu.h>
#include <emu/emu_shellcode.h>

#define FETCH_OPND(n)   (fp->sp[n])

#define MIN_STR_LEN_TO_CHECK 30
#define MAX_STR_LEN_TO_CHECK 65535
#define HEAPSPRAY_LEN MAX_STR_LEN_TO_CHECK

typedef struct _heapspray_info{
    double entropy;
    char most_char;
    uint32_t most_char_cnt;
    char sec_char;
    uint32_t sec_char_cnt;
} heapspray_info;

heapspray_info check_heapspray(const unsigned char *buffer,uint32_t length)
{
    heapspray_info ret;
    uint32_t char_tbl[256];

    memset(&ret,0,sizeof(heapspray_info));
    memset(char_tbl,0,sizeof(uint32_t)*256);

    uint32_t i;
    for (i = 0; i < length; ++i)
    {
        char_tbl[buffer[i]]++;
    }

    double nentropy = 0;
    double log2 = log(2);
    for (i = 0; i < 256; ++i)
    {
        if(char_tbl[i] == 0)
            continue;
        nentropy += char_tbl[i] * 1.0 /length * log(char_tbl[i] * 1.0 /length) / log2;
        if(char_tbl[i] > ret.most_char_cnt){
            ret.sec_char = ret.most_char;
            ret.sec_char_cnt = ret.most_char_cnt;
            ret.most_char = i;
            ret.most_char_cnt = char_tbl[i];
        }else if(char_tbl[i] > ret.sec_char_cnt){
            ret.sec_char = i;
            ret.sec_char_cnt = char_tbl[i];
        }
    }
    ret.entropy  = -nentropy;
    if(ret.entropy < 0.000001 && ret.entropy > -0.000001) ret.entropy = 0;
    /* fprintf(stderr,"DEBUG: entropy:%lf, max:%c*%d, sec:%c*%d\n", */
    /*         ret.entropy, */
    /*         ret.most_char, */
    /*         ret.most_char_cnt, */
    /*         ret.sec_char, */
    /*         ret.sec_char_cnt); */
            
    return ret;
}

int check_buffer(const unsigned char *bytes,uint32_t length)
{
    //fprintf(stderr,"DEBUG:Checking buffer\n");
    
    if (length > MAX_STR_LEN_TO_CHECK)
    {
        fprintf(stderr,"WARNING: Long string with more than %d bytes! return -1 in developing mode\n",MAX_STR_LEN_TO_CHECK);
        return -1;
    }

    struct emu * e;
    e = emu_new();
    
    int result;
    result = emu_shellcode_test(e, (unsigned char *)bytes, length);
    emu_free(e);
    if (result >= 0)
        return result;

    e = emu_new();
    result = emu_shellcode_test(e, (unsigned char *)bytes, length);
    emu_free(e);
    return result;
}


jsval get_opcode_arg(JSContext *cx, JSScript *script, jsbytecode *pc)
{
    JSOp op;
    const JSCodeSpec *cs;
    ptrdiff_t len;
    uint32 type;
    JSAtom *atom;
    jsval v;

    op = (JSOp)*pc;
    if (op >= JSOP_LIMIT) {
        char numBuf1[12], numBuf2[12];
        JS_snprintf(numBuf1, sizeof numBuf1, "%d", op);
        JS_snprintf(numBuf2, sizeof numBuf2, "%d", JSOP_LIMIT);
        fprintf(stderr,"ERROR in get_opcode_arg: unknown bytecode %s %s\n",numBuf1,numBuf2);
        return 0;
    }
    cs = &js_CodeSpec[op];
    len = (ptrdiff_t) cs->length;
    type = cs->format & JOF_TYPEMASK;

    switch (type) {
        case JOF_CONST:
            atom = GET_ATOM(cx, script, pc);
            v = ATOM_KEY(atom);
            return v;
            break;

        default: {
            char numBuf[12];
            JS_snprintf(numBuf, sizeof numBuf, "%lx", (unsigned long) cs->format);
            fprintf(stderr,"ERROR in get_opcode_arg: Unknown format %s\n",numBuf);
            return 0;
        }
    }
}


JSTrapStatus js_interrupt_handler(JSContext *cx, JSScript *script, jsbytecode *pc, jsval *rval,void *closure)
{
    JSOp opcode = 0;
    JSStackFrame * fp = NULL;
    jsval r_val = 0;
    size_t l_val = 0;
    const JSCodeSpec *cs;
    char *updatetype = "R";
    
    opcode = (JSOp)*pc;//JS_GetTrapOpcode(cx, script, pc);//in 1.8.0, use this
    cs = &js_CodeSpec[opcode];
    //fprintf(stderr, "DEBUG:now  %s\n", cs->name);

    fp = NULL;
    JS_FrameIterator(cx,&fp);
    r_val = l_val = 0;
    switch(opcode)
    {
        case JSOP_SETNAME:
        case JSOP_SETPROP:
        {
            r_val = FETCH_OPND(-1);
            l_val = get_opcode_arg(cx,script,pc);
            updatetype = "R";
            break;
        }
        case JSOP_SETGVAR:
        {
            r_val = FETCH_OPND(-1);
            l_val = (size_t)&(fp->vars[GET_VARNO(pc)]); // TODO: FIXIT this is not l_val, setgvar is more than that
            updatetype = "R";
            break;
        }
        case JSOP_SETELEM:
        {
            r_val = FETCH_OPND(-1);
            l_val = FETCH_OPND(-3);
            updatetype = "A";
            break;
        }
        case JSOP_SETVAR:
        {
            r_val = FETCH_OPND(-1);
            l_val = (size_t)&(fp->vars[GET_VARNO(pc)]); // TODO: FIXIT
            updatetype = "R";
            break;
        }
        case JSOP_SETLOCALPOP:
        case JSOP_SETLOCAL:
        {
            r_val = FETCH_OPND(-1);
            l_val = (size_t)&(fp->spbase[GET_UINT16(pc)]);
            updatetype = "R";
            break;
        }
        case JSOP_SETARG:
        {
            r_val = FETCH_OPND(-1);
            l_val = (size_t)&(fp->argv[GET_ARGNO(pc)]); // TODO: FIXIT
            updatetype = "R";
            break;
        }
        case JSOP_SETCONST:
        {
            // Errr.... actually i don't know what's the meaning of setconst etc,
            // if you know, please email me :)
            fprintf(stderr, "DEBUG: found %s\n", cs->name);
            r_val = FETCH_OPND(-1);
            l_val = 0;
            updatetype = "R";
            break;
        }
        case JSOP_ENUMELEM:
        case JSOP_ENUMCONSTELEM:
        {
            fprintf(stderr, "DEBUG: found %s\n", cs->name);
            r_val = FETCH_OPND(-3);
            l_val = FETCH_OPND(-2);
            updatetype = "A";
            break;
        }
        case JSOP_SETXMLNAME:
        case JSOP_SETMETHOD:
        {
            l_val = FETCH_OPND(-2);
            r_val = FETCH_OPND(-1);
            updatetype = "R";
            break;
        }
        default:
            if(0&&cs->format & JOF_SET){
                fprintf(stderr, "DEBUG: %s interpreted but not checked\n", cs->name);
            }
            break;
    }
    if(r_val != 0 &&
       JSVAL_IS_STRING(r_val))
    {
        uint32_t length = 0;
        length = JS_GetStringLength(JSVAL_TO_STRING(r_val)) * sizeof(jschar);
        if(length < MIN_STR_LEN_TO_CHECK){
            goto end;
        }
        int r = 0;
        unsigned char *bytes = NULL;
        jschar *jschars = NULL;
        jschars = JS_GetStringChars(JSVAL_TO_STRING(r_val));
        bytes = (unsigned char *)jschars;
        if(length > 65535){
            //Heapspray DETECTED!
            /* fprintf(stderr,"\nDEBUG: HEAPSPRAY DETECTED!\n"); */

            heapspray_info hsinfo;
            hsinfo = check_heapspray(bytes,length);
            PyObject* alert = NULL;
            PyObject* param = NULL;
            Context* pycx = NULL;
            pycx = (Context*) JS_GetContextPrivate(cx);

            size_t uniqueid = (size_t)pycx + (size_t)l_val;
            
            PyObject *str = PyString_FromString("alert_by_uid");
            PyObject *alert_by_uid = NULL;
            if (str == NULL) goto error;
            alert_by_uid = PyObject_GetAttr((PyObject *)HeapsprayAlertType,str);
            Py_DECREF(str);
            str = NULL;
            if (alert_by_uid == NULL) goto error;

            PyObject *pyuid = Py_BuildValue("i",uniqueid);
            if (PyDict_Contains(alert_by_uid,pyuid)){
                alert = PyDict_GetItem(alert_by_uid,pyuid);
                if(alert == NULL) goto error;

                PyObject *raiseret = PyObject_CallMethod(alert,
                                                         "reraise",
                                                         "sdi{s:s#,s:i,s:s#,s:i}",
                                                         "Previous",
                                                         hsinfo.entropy,
                                                         length,
                                                         "sledge_char",
                                                         &(hsinfo.most_char),
                                                         1,
                                                         "sledge_cnt",
                                                         hsinfo.most_char_cnt,
                                                         "sec_char",
                                                         &(hsinfo.sec_char),
                                                         1,
                                                         "sec_char_cnt",
                                                         hsinfo.sec_char_cnt);
                if(raiseret == NULL) goto error;
                Py_DECREF(raiseret);
                raiseret = NULL;                                                         
            }else{            
                param = Py_BuildValue("isdii{s:s#,s:i,s:s#,s:i}s",
                                      -1,
                                      "Heapspray Detected!",
                                      hsinfo.entropy,
                                      length,
                                      uniqueid,
                                      "sledge_char",
                                      &(hsinfo.most_char),
                                      1,
                                      "sledge_cnt",
                                      hsinfo.most_char_cnt,
                                      "sec_char",
                                      &(hsinfo.sec_char),
                                      1,
                                      "sec_char_cnt",
                                      hsinfo.sec_char_cnt,
                                      updatetype);
                if(param == NULL) goto error;
            
                alert = PyObject_CallObject((PyObject*)HeapsprayAlertType,param);
                Py_DECREF(param);
                param = NULL;
                if(alert == NULL) goto error;
                if(PyList_Append(pycx->alertlist,alert) != 0)
                {
                    goto error;
                }
                Py_DECREF(alert);
                alert = NULL;
            }
            Py_DECREF(pyuid);
            pyuid = NULL;
        }else{
            /* FILE *f; */
            /* char path[100]; */
            /* sprintf(path,"debug/%d.sc",l_val); */
            /* f = fopen(path,"wb"); */
            /* fwrite(bytes,length,1,f); */
            /* fclose(f); */
            
            r = check_buffer(bytes,length);
            if(r >= 0)
            {
                //Shellcode DETECTED!
                /* fprintf(stderr,"\nDEBUG: SHELLCODE DETECTED!\n"); */
                PyObject* alert = NULL;
                PyObject* param = NULL;
                Context* pycx = NULL;
                
                param = Py_BuildValue("iss#i",
                                      -1,
                                      "Shellcode Detected!",
                                      bytes,
                                      length,
                                      r);
                if(param == NULL) goto error;
                
                alert = PyObject_CallObject((PyObject*)ShellcodeAlertType,param);
                Py_DECREF(param);
                param = NULL;
                if(alert == NULL) goto error;
                pycx = (Context*) JS_GetContextPrivate(cx);
                
                if(PyList_Append(pycx->alertlist,alert) != 0)
                {
                    goto error;
                }
                Py_DECREF(alert);
                alert = NULL;
                //TODO: FIXME: is it necesary to DECREF alert?
                
                /*         if rt.malvariables.has_key(l_val): */
                /*             alert = rt.malvariables[l_val] */
                /*         else: */
                /*             alert = Alert(0,l_val,"Shellcode Detected",{"hit":0}) */
                /*             rt.malvariables[l_val]=alert */
                /*             rt.alerts.append(alert) */
                /*         alert.misc["hit"]+=1 */
                
                /*         jschars = JS_GetStringChars(JSVAL_TO_STRING(r_val)) */
                /*         bytes = <char *>jschars */
                /*         length = JS_GetStringLength(JSVAL_TO_STRING(r_val)) */
                /*         s = PyString_FromStringAndSize(bytes, length*2)#sizeof(jschar)) */
                /*         alert.misc["contents"] = s */
                /*         alert.misc["offset"] = r */
                /*         #f = open("shellcodes/"+str(l_val)+".sc","w") */
                /*         #f.write(s) */
                /*         #f.close() */
                /*         #print "DEBUG: !!!SC DETECTED at "+str(l_val)+"="+str(r_val)+"size:"+str(length*2) */
            }
        }
    }
end:
    return JSTRAP_CONTINUE;
error:
    return  JSTRAP_ERROR;
}


#if 0


#endif
