// Microsoft Rich Textbox Control 6.0 (SP6)
// CVE-NOMATCH

function MSRICHTXT() {
        this.Text = new String();
	this.SaveFile=function(path, arg) {
		add_alert("Writing to file " + path + " with contents: " + this.Text);
	}
}