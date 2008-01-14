// DivX Player 6.6.0 ActiveX Control
// CVE-NOMATCH

function DivX() {
	this.SetPassword=function(arg0) {
		if (arg0.length > 128) {
			add_alert('DivX overflow in SetPassword()');
		}
	}
}