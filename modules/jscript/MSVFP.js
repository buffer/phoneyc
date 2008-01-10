// Microsoft VFP_OLE_Server
// CVE-NOMATCH

function MSVFP() {
	this.foxcommand=function(cmd) {
		add_alert("Microsoft VFP_OLE_Server running " + cmd);
	}
        this.FoxCommand=this.foxcommand;
}