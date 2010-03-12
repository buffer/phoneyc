/* -*- Mode: C; tab-width: 4; indent-tabs-mode: nil; c-basic-offset: 4 -*-
 *
 * Copyright 2009 Z. Chen <czj.pub@gmail.com>
 *
 * This file is part of the honeyjs package for PHoneyC, released under the
 * MIT license.
 *
 */

#ifndef _TRACING_H_
#define _TRACING_H_

#include <Python.h>
#include "structmember.h"

extern JSTrapStatus js_interrupt_handler(JSContext *cx, JSScript *script, jsbytecode *pc, jsval *rval,void *closure);


#endif /* _TRACING_H_ */
