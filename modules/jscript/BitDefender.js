// BitDefender Online Scanner ActiveX Control 
// CVE-2007-5775 

function BitDefender() {
	this.initx=function(arg) {
		if (arg.length > 1024) {
			add_alert('BitDefender Online Scanner InitX() overflow');
		}
	}
	this.InitX=this.initx;
}
