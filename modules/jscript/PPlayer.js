// Xunlei Thunder PPLAYER.DLL_1_WORK ActiveX Control
// 

function check_PPlayer_attr(prop, oldv, newv) {
	if (prop.toString() == 'FlvPlayerUrl') {
		if (newv.length > 1060) {
			add_alert('Xunlei Thunder XPPlayer Class "FlvPlayerUrl" Property Handling Buffer Overflow');
		}
	}
	if (prop.toString() == 'Logo') {
		if (newv.length > 128) {
			add_alert('PPStream (PowerPlayer.dll 2.0.1.3829) Activex Remote Overflow Exploit in Logo property');
		}
	}
}

function PPlayer() {
	this.FlvPlayerUrl = '';
	this.watch('FlvPlayerUrl', check_PPlayer_attr);
	this.DownURL2=function(arg0, arg1, arg2, arg3) {
		if (arg0.length > 1024) {
			add_alert('Xunlei Thunder 5.x DownURL2() overflow');
		}
	}
	this.Logo = '';
	this.watch('Logo', check_PPlayer_attr);
}
