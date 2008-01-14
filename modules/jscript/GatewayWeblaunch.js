// Gateway Weblaunch ActiveX Control
// CVE ID: CVE-NOMATCH

function GatewayWeblaunch() {
	this.DoWebLaunch=function(arg0, arg1, arg2, arg3) {
		if ((arg1.length > 512) || (arg3.length > 512)) {
			add_alert('GatewayWeblaunch overflow');
		} else {
			add_alert('GatewayWeblaunch will try to execute ' + arg1 + ' ' + arg2 + ' ' + arg3);
		}
	}
}
