// Lycos FileUploader Module 2.x
// CVE-NOMATCH

function check_fileuploader_arg(prop, oldv, newv) {
    if (newv.length > 1024) {
	add_alert('FileUploader() overflow in HandwriterFilename property');
    }
}

function FileUploader() {
    this.HandwriterFilename = '';
    this.watch('HandwriterFilename', check_fileuploader_arg);
}