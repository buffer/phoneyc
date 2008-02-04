// Facebook Photo Uploader 4.x
// CVE-NOMATCH

function check_facebook_arg(prop, oldv, newv) {
    p = prop.toString();
    if ((p == 'ExtractExif') || (p == 'ExtractIptc')) {
	if (newv.length > 255) {
	    add_alert('FaceBook PhotoUploader overflow in property ' + prop.toString());
	}
    }
}

function FacebookPhotoUploader() {
    this.ExtractIptc='';
    this.watch('ExtractIptc', check_facebook_arg);
    this.ExtractExif='';
    this.watch('ExtractExif', check_facebook_arg);
}