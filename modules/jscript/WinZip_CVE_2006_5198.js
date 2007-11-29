// WinZip FileView ActiveX Control 
// CVE-2006-3890 CVE-2006-5198 CVE-2006-6884


function WinZipFileView() {
	this.CreateNewFolderFromName=function(arg) {
		if (arg.length > 230) {
			add_alert('WinZip CreateNewFolderFromName overflow');
		}
	}
}