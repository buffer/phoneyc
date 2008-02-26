// Move Networks Quantum Streaming Player Control
// CVE-NOMATCH

function QuantumStreaming() {
    this.UploadLogs=function(url, arg) {
	if (url.length > 20000) {
	    add_alert(' Quantum Streaming Player overflow in UploadLogs()');
	}
    }
}