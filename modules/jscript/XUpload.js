// Persists Software XUpload control, version 2.1.0.1.
// CVE-2007-6530

function XUpload() {
	this.AddFolder=function(arg) {
		if (arg.length > 1024) {
			add_alert('XUpload overflow in AddFolder()');
		}
	}
}