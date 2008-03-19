// Symantec BackupExec
// CVE-2007-6016, CVE-2007-6017

function check_symc_attr(prop, oldv, newv) {
    p = prop.toString();
    switch(p) {
    case "_DOWText0":
    case "_DOWText6":
    case "_MonthText0":
    case "_MonthText11":
	try {
	    if (newv.length > 255) {
		add_alert('SymantecBackupExec overflow with property ' + prop);
	    }
	} catch(e) { add_alert('new value of property ' + prop + ' has no value: ' + e);}
    }
}

function SymantecBackupExec() {
    this._DOWText0='';
    this.watch('_DOWText0', check_symc_attr);
    this._DOWText6='';
    this.watch('_DOWText6', check_symc_attr);
    this._MonthText0='';
    this.watch('_MonthText0', check_symc_attr);
    this._MonthText11='';
    this.watch('_MonthText11', check_symc_attr);
    this.Save=function(arg0, arg1) {
	check_symc_attr('_DOWText0', '', this._DOWText0);
	check_symc_attr('_DOWText6', '', this._DOWText6);
	check_symc_attr('_MonthText0', '', this._MonthText0);
	check_symc_attr('_MonthText11', '', this._MonthText11);
    }
}