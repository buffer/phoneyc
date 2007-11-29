// SonicWall SSL-VPN NetExtender NELaunchCtrl ActiveX control
// CVE ID: CVE-2007-5603 (AddRouteEntry)

function NELaunchCtrl() {
        this.AddRouteEntry=function(arg0, arg1) {
                if (arg0.length > 20) {
                        add_alert("overflow in AddRouteEntry arg0");
                } 
                if (arg1.length > 20) {
                        add_alert("overflow in AddRouteEntry arg1");
                }
        }
}
