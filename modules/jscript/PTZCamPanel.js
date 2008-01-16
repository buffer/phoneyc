// RTS Sentry Digital Surveillance PTZCamPanel Class (CamPanel.dll 2.1.0.2)
// CVE-NOMATCH

function PTZCamPanel() {
    this.ConnectServer=function(server, user) {
	if (user.length > 1024) {
	    add_alert('PTZCamPanel ConnectServer() overflow in user arg');
	}
    }
}