#
# The Alert module for phoneyc and honeyjs
#
# Copyright 2009 Z. Chen <czj.pub@gmail.com>
#
# This file is part of the PHoneyC project, released under the MIT license.
#

import libemu

class Alert:
    gid = 0
    def __init__(self,atype,aid=-1,msg="",misc={}):
        if aid == -1:
            Alert.gid += 1
            self.aid=Alert.gid
        else:
            self.aid=aid
        self.msg=msg
        self.atype=atype
        self.misc=misc


class ShellcodeAlert(Alert):
    def __init__(self,aid=-1,msg="Shellcode Detected",shellcode="",offset = 0,misc={}):
        Alert.__init__(self,"ALERT_SHELLCODE",aid,msg,misc)
        self.shellcode = shellcode;
        self.offset = offset;
    def run_shellcode(self):
        e=libemu.Emulator()
        return e.run_shellcode(self.shellcode,self.offset)

class HeapsprayAlert(Alert):
    alert_by_uid = {}
    def __init__(self,aid=-1,msg="Heapspray Detected",entropy=-1,length = 0,uniqueid = 0,misc={},update = "R"):
        Alert.__init__(self,"ALERT_HEAPSPRAY",aid,msg,misc)
        self.entropy = entropy
        self.length = length
        self.hit = 1
        self.memusage = length
        self.update = update
        self.__class__.alert_by_uid[uniqueid] = self
    def reraise(self,msg = "Previous",entropy = -1, length = 0,misc = {}):
        if msg != "Previous":
            self.msg = msg
        if entropy != -1:
            self.entropy = entropy
        if length != 0:
            self.length = length
            if self.update == "R" or self.update == "r":
                self.memusage = length
            if self.update == "A" or self.update == "a":
                self.memusage += length
        self.misc.update(misc)
        self.hit += 1
        return None
