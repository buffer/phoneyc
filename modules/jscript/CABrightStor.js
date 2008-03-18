// CA BrightStor
// CVE-NOMATCH

function CABrightStor() {
    this.AddColumn=function(arg0, arg1) {
	if (arg0.length > 100) {
	    add_alert('CA BrightStor overflow in AddColumn()');
	}
    }
}