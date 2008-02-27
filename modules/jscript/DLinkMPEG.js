// D-Link MPEG4 SHM Audio Control
// CVE-NOMATCH

function check_dlink_attr(prop, oldv, newv) {
    p = prop.toString();
    if (p == 'Url') {
	if (newv.length > 1024) {
	    add_alert('DLinkMPEG overflow in Url property');
	}
    }
}

function DLinkMPEG() {
    this.Url = '';
    this.watch('Url', check_dlink_attr);
}