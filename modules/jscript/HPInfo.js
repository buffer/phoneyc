// HP Info Center ActiveX Control
// CVE-2007-6331, CVE-2007-6332, CVE-2007-6333

function HPInfo() {
	this.LaunchApp=function(prog, args, unk) {
		add_alert("HP Info Center LaunchApp called to run: " + prog + " " + args);
	}
	this.SetRegValue=function(key, section, keyname, value) {
		add_alert("HP Info Center SetRegValue: " + key + "/" + section + "/" + keyname + " set to " + value);
	}
	this.GetRegValue=function(key, section, keyname) {
		add_alert("HP Info Center GetRegValue, reading: " + key + "/" + section + "/" + keyname);
	}
	this.EvaluateRules=function() {
		return;
	}
	this.SaveToFile=function(path) {
		add_alert("HP Software Update SaveToFile(), writes to " + path);
	}
}