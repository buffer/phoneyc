// NamoInstaller ActiveX Control 1.x - 3.x
// CVE-NOMATCH

function NamoInstaller() {
    this.Install=function(arg) {
	if (arg.indexOf('http:') > -1) {
	    add_alert('Insecure download via NamoInstaller of ' + arg);
	}
	if (arg.length > 1024) {
	    add_alert('NamoInstaller overflow in Install');
	}
    }
}