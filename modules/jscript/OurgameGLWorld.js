// Ourgame GLWorld HanGamePluginCn18 Class ActiveX Control 
// CVE-2008-0647

function OurgameGLWorld() {
    this.hgs_startGame=function(s) {
	if (s.length > 1000) {
	    add_alert('Overflow in Ourgame GLWorld hgs_startGame()');
	}
    }
    this.hgs_startNotify=function(s) {
	if (s.length > 1000) {
	    add_alert('Overflow in Ourgame GLWorld hgs_startNotify()');
	}
    }
}