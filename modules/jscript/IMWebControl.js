// iMesh <= 7.1.0.x IMWebControl Class 
// CVE-2007-6493, CVE-2007-6492

function IMWebControl() {
	this.ProcessRequestEx=function(arg) {
		if (arg.length == 0) {
			add_alert('IMWebControl NULL value in ProcessRequestEx()');
		}
	}
	this.SetHandler=function(arg) {
		if (arg.toString() == '218959117') {
			add_alert('IMWebControl overflow in SetHandler()');
		}
	}
}