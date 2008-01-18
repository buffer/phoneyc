// RTSP MPEG4 SP Control 1.x
// CVE-NOMATCH

function check_rtsp_property_attr(prop, oldv, newv) {
    if (prop == 'MP4Prefix') {
	if (newv.length > 128) {
	    add_alert('RTSP MPEG4 SP Control overflow in MP4Prefix property');
	}
    }
}

function RtspVaPgCtrl() {
    this.MP4Prefix = '';
    this.watch('MP4Prefix', check_rtsp_property_attr);
}
