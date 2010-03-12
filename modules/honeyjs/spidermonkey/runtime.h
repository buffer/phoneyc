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

#ifndef PYSM_RUNTIME
#define PYSM_RUNTIME

#include <Python.h>
#include "structmember.h"

#include <jsapi.h>

typedef struct {
    PyObject_HEAD
    JSRuntime* rt;
    int is_traced;
} Runtime;

extern PyTypeObject _RuntimeType;

#endif
