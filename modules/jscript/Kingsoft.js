// Kingsoft Antivirus
// CVE-NOMATCH

function Kingsoft() {
    this.SetUninstallName=function(arg) {
	if (arg.length > 900) {
	    add_alert("Kingsoft SetUninstallName() heap overflow");
	}
    }
}