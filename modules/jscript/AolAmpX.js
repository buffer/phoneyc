// AOL Radio AOLMediaPlaybackControl.exe 
// CVE-2007-6250

function AolAmpX() {
    this.AppendFileToPlayList=function(arg) {
	if (arg.length > 512) {
	    add_alert('AOL AmpX overflow in AppendFileToPlayList');
	}
    }
}