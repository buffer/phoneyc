// SSReader Pdg2 ActiveX control (pdg2.dll)
// CVE-2007-5892

function SSReaderPdg2() {
	this.Register=function(arg0, arg1) {
		if (arg1.length > 256) {
			add_alert("SSReader Pdg2 Register method overflow");
		}
	}
}