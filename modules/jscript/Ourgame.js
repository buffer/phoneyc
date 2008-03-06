// Ourgame GLWorld 2.x
// CVE-NOMATCH

function Ourgame() {
    this.hgs_startNotify=function(arg) {
	if (arg.length > 1200) {
	    add_alert("Ourgame buffer overflow in hgs_startNotify");
	}
    }
}