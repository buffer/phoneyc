// Yahoo! Messenger 8.x YVerInfo.dll ActiveX Control
// CVE ID: CVE-2007-4515

function YahooYVerInfo() {
	this.fvCom=function(arg) {
		if (arg.length > 20) {
			add_alert("overflow in YahooYVerInfo.fvCom() arg0");
		}
	}
        this.fvcom = this.fvCom;

	this.info=function(arg) {
		if (arg.length > 20) {
			add_alert("overflow in YahooYVerInfo.info() arg0");
		}
	}
}
