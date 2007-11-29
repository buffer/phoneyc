// Nessus Vulnerability Scanner ScanCtrl ActiveX Control
// CVE-2007-4061, CVE-2007-4062, CVE-2007-4031

function checkArg(arg, meth) {
	var ret = '';
	arg = arg.toUpperCase();
	// print('checkArg(' + arg + ',' + meth + ')');
	// print(arg.indexOf('SYSTEM32'));
	if (arg.indexOf('SYSTEM32') > -1) {
		return('ScanCtrl.' + meth + ' -- possible SYSTEM32 activity');
	}
	// print(arg.indexOf('../'));
	if (arg.indexOf('Autostart') > -1) {
		return('ScanCtrl.' + meth + ' -- Autostart activity');
	}
	if (arg.indexOf('../') > -1) {
		return('ScanCtrl.' + meth + ' -- ../ activity');
	}
	// print(ret);
	return(ret);
}

function ScanCtrl() {
	var ret = '';
	this.deleteReport=function(arg) {
		add_alert(checkArg(arg, 'deleteReport'));
	}
	this.deleteNessusRC=function(arg) {
		add_alert(checkArg(arg, 'deleteNessusRC'));
	}
	this.saveNessusRC=function(arg) {
		add_alert(checkArg(arg, 'saveNessusRC'));
	}
	this.addsetConfig=function(arg) {
		add_alert(checkArg(arg, 'addsetConfig'));
	}
	if (ret.length > 0) {
		add_alert(ret);
	}
	// print('RET: ' + ret);
}