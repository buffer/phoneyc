// NCTsoft Products NCTAudioFile2 ActiveX Control
// CVE-2007-0018

function NCTAudioFile2() {
	this.SetFormatLikeSample=function(arg) {
		if (arg.length > 4000) {
			add_alert('NCTAudioFile2 overflow in SetFormatLikeSample');
		}
	}
}