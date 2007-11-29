// PPStream (PowerPlayer.dll 2.0.1.3829) ActiveX Control
// via http://pstgroup.blogspot.com/2007/09/advisory2-mpsdll.html

function check_PPstream_attr(prop, oldv, newv) {
	if (prop.toString() == 'URL') {
		if (newv.length > 255) {
			add_alert('PPStream (PowerPlayer.dll 2.0.1.3829) ActiveX Control via URL property');
		}
	}
	if (prop.toString() == 'backImage') {
		if (newv.length > 1000) {
			add_alert('PPStream (PowerPlayer.dll 2.0.1.3829) ActiveX Control via ' + prop.toString + ' property');
		}
	}
	if (prop.toString() == 'titleImage') {
		if (newv.length > 1000) {
			add_alert('PPStream (PowerPlayer.dll 2.0.1.3829) ActiveX Control via ' + prop.toString + ' property');
		}
	}
}

function PPStream() {
	this.URL = '';
	this.watch('URL', check_PPstream_attr);
	this.backImage = '';
	this.watch('backImage', check_PPstream_attr);
	this.titeImage = '';
	this.watch('titleImage', check_PPstream_attr);
	this.rawParse=function(arg0) {
		if (arg0.length > 255) {
			add_alert('PPStream (PowerPlayer.dll 2.0.1.3829) ActiveX Overflow, rawParse()');
		}
	}
	this.advancedOpen=function(arg0, arg1) {
		if (arg0.length > 1000) {
			add_alert('PPStream (PowerPlayer.dll 2.0.1.3829) ActiveX Overflow, advancedOpen()');
		}
	}
	this.isDVDPath=function(arg0) {
		if (arg0.length > 255) {
			add_alert('PPStream (PowerPlayer.dll 2.0.1.3829) ActiveX Overflow, isDVDPath()');
		}
	}
}
