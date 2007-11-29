// Yahoo! Messenger 8.x Ywcvwr ActiveX Control
// CVE ID: CVE-2007-4391 

function checkAttr(attr, val) {
	if (val.length > 255) {
		return(attr + ' size over 255 bytes');
	}
	return('');
}

function check_yahoo_server(prop, oldv, newv) {
	var ret = checkAttr(prop, newv);
	if (ret.length > 0) {
		add_alert('Yahoo! server overflow');
	}
}

function YahooYwcvwr() {
	this.server = '';
	this.watch('server', check_yahoo_server);
	this.initialize=function() {
		add_alert(checkAttr('this.server', this.server));
	}
	this.send=this.initialize;
	this.receive=this.initialize;
	this.GetComponentVersion=function(arg) {
		if (arg.length > 255) {
			add_alert('Yahoo! GetComponentVersion() overflow');
		}
	}
}
