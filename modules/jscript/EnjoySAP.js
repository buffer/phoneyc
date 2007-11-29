function EnjoySAP() {
	this.LaunchGUI=function(arg0, arg1, arg2) {
		if (arg0.length > 1500) {
			add_alert('EnjoySAP.LaunchGUI overflow in arg0');
		}
	}
	this.LaunchGui=this.LaunchGUI;
	this.PrepareToPostHTML=function(arg) {
		if (arg.length > 1000) {
			add_alert('EnjoySAP.PrepareToPostHTML overflow in arg0');
		}
	}
}