// NeoTraceExplorer.NeoTraceLoader ActiveX control (NeoTraceExplorer.dll)
// CVE ID: CVE-2006-6707

function NeoTracePro() {
	this.TraceTarget=function(arg) {
		if (arg.length > 255) {
			add_alert('NeoTracePro.TraceTarget overflow in arg0');
		}	
	}
}
