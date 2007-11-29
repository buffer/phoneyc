// RealMedia RealPlayer Ierpplug.DLL ActiveX Control
// 

function RealPlayer() {
	this.DoAutoUpdateRequest=function(arg0, arg1, arg2) {
		if ((arg0.length > 1000) || (arg1.length > 1000)) {
			add_alert('RealPlayer 10.5 ierpplug.dll overflow in DoAutoUpdateRequest()');
		}
	}
	this.PlayerProperty=function(arg) {
		if (arg.length > 1000) {
			add_alert('RealPlayer 10.5 ierpplug.dll overflow in PlayerProperty()');
		}
	}
	this.Import=function(arg) {
		if (arg.length > 1000) {
			add_alert('RealPlayer 10.5 ierpplug.dll overflow in Import()');
		}
		return(this);
	}
}
