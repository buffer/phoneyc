// Qvod Player QvodCtrl Class ActiveX Control 
// CVE-NOMATCH

function check_property_attr(prop, oldv, newv) {
    p = prop.toString();
    p = p.toUpperCase();
    if (p == 'URL') {
	if (newv.length > 800) {
	    add_alert('Qvod Player QvodCtrl Class ActiveX Control overflow in URL property');
	}
    }
}

function QvodCtrl() {
    this.url = '';
    this.URL = '';
    this.watch('url', check_property_attr);
    this.watch('URL', check_property_attr);
}
