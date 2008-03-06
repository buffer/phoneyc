// ICQ Toolbar attack
// CVE-NOMATCH

function ICQToolbar() {
    this.GetPropertyById=function(arg0, arg1) {
	if (arg1.length > 120) {
	    add_alert("ICQToolbar buffer overflow in GetPropertyById");
	}
    }
}