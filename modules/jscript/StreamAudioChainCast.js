// StreamAudio ChainCast VMR Client Proxy ActiveX Control 3.x
// CVE-NOMATCH

function StreamAudioChainCast() {
	this.InternalTuneIn=function(arg0, arg1, arg2, arg3, arg4) {
		if (arg0.length > 248) {
			add_alert('StreamAudio ChainCast ProxyManager buffer overflow in arg0');
		}
	}
}
