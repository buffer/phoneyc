// Yahoo! Music Jukebox 2.x
// CVE-NOMATCH

function YahooJukebox() {
    this.AddBitmap=function(arg0, arg1, arg2, arg3, arg4, arg5) {
	if (arg1.length > 256) {
	    add_alert('Yahoo Jukebox overflow in AddBitmap()');
	}
    }
    this.AddButton=function(arg0, arg1) {
	if (arg0.length > 256) {
	    add_alert('Yahoo Jukebox overflow in AddButton()');
	}
    }
    this.AddImage=function(arg0, arg1) {
	if (arg0.length > 256) {
	    add_alert('Yahoo Jukebox overflow in AddImage()');
	}
    }
}