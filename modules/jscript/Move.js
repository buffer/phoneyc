// Move Networks Upgrade Manager 1.x
// CVE-NOMATCH

function Move() {
    this.Upgrade=function(arg0, arg1, arg2, arg3) {
	if (arg0.length > 6000) {
	    add_alert('Move Networks Upgrade Manager overflow in Upgrade()');
	}
    }
}