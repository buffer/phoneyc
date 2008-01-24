// GOM Player GOM Manager ActiveX Control
// CVE-2007-5779

function GomWeb() {
    this.OpenURL=function(arg) {
	if (arg.length > 500) {
	    add_alert('GOM Player 2 overflow in OpenURL()');
	}
    }
}