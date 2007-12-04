// VLC Activex Control
// CVE-NOMATCH

function VLC() {
	this.getVariable=function(arg) {
		if (arg.length > 255) {
			add_alert("VLC getVariable() overflow");
		}
	}
	this.setVariable=function(arg0, arg1) {
		if ((arg0.length > 255) || (arg1.length > 255)) {
			add_alert("VLC setVariable() overflow"):
		}
	}
	this.addTarget=function(arg0, arg1, arg2, arg3) {
		if ((arg0.length > 255) || (arg1.length > 255) || (arg2.length > 255) || (arg3.length > 255)) {
			add_alert("VLC addTarget() overflow"):
		}
	}
}