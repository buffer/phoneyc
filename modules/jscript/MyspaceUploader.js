// MySpace Uploader Control 1.x
// CVE-NOMATCH

function check_myspace_arg(prop, oldv, newv) {
    p = prop.toString();
    if (p == 'Action') {
	if (newv.length > 512) {
	    add_alert('Myspace Uploader overflow with ' + p + ' property');
	}
    }
}

function MyspaceUploader() {
    this.Action='';
    this.watch('Action', check_myspace_arg);
    // borrow from facebook control, same stuff
    this.ExtractIptc='';
    this.watch('ExtractIptc', check_facebook_arg);
    this.ExtractExif='';
    this.watch('ExtractExif', check_facebook_arg);
}