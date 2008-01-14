// DVRHOST Web CMS OCX 1.x
// CVE-NOMATCH

function DVRHOSTWeb() {
	this.TimeSpanFormat=function(arg0, arg1) {
		if (arg1.length > 512) {
			add_alert('DVRHOST Web CMS OCX overflow in TimeSpanFormat()');
		}
	}
}
