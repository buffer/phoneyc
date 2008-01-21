// Toshiba Surveillance (Surveillix) RecordSend Class (MeIpCamX.DLL 1.0.0.4)
// CVE-NOMATCH

function Toshiba() {
    this.SetPort=function(arg) {
	if (arg.length > 10) {
	    add_alert('Toshiba Surveillance oveflow in SetPort()');
	}
    }
    this.SetIpAddress=function(arg) {
	if (arg.length > 18) {
	    add_alert('Toshiba Surveillance overflow in SetIpAddress()');
	}
    }
}