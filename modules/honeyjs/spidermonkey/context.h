/* -*- Mode: C; tab-width: 4; indent-tabs-mode: nil; c-basic-offset: 4 -*-
 *
 * This file is originally written by Paul J. Davis, Z. Chen has modified it to
 * make the honeyjs package
 *
 * Copyright 2009 Paul J. Davis <paul.joseph.davis@gmail.com>
 *
 * This file is part of the python-spidermonkey package released
 * under the MIT license.
 *
 */

#ifndef PYSM_CONTEXT_H
#define PYSM_CONTEXT_H

#include <Python.h>
#include "structmember.h"

#include "spidermonkey.h"

typedef struct {
    PyObject_HEAD
    Runtime* rt;
    PyObject* global;
    PyObject* access;
    PyObject* alertlist;
    JSContext* cx;
    JSObject* root;
    PyDictObject* classes;
    PySetObject* objects;
    uint32 branch_count;
    long max_heap;
    time_t max_time;
    time_t start_time;
} Context;

PyObject* Context_get_class(Context* cx, const char* key);
int Context_add_class(Context* cx, const char* key, PyObject* val);

int Context_has_access(Context*, JSContext*, PyObject*, PyObject*);

int Context_has_object(Context* cx, PyObject* val);
int Context_add_object(Context* cx, PyObject* val);
int Context_rem_object(Context* cx, PyObject* val);

extern PyTypeObject _ContextType;

#endif
