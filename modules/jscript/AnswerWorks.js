// Vantage Linguistics AnswerWorks ActiveX Controls
// CVE-2007-6387

function AnswerWorks() {
	this.GetHistory=function(arg) {
		if (arg.length > 215) {
			add_alert('AnswerWorks overflow in GetHistory()');
		}	
	}
	this.GetSeedQuery=function(arg) {
		if (arg.length > 215) {
			add_alert('AnswerWorks overflow in GetSeedQuery()');
		}	
	}
	this.SetSeedQuery=function(arg) {
		if (arg.length > 215) {
                        add_alert('AnswerWorks overflow in SetSeedQuery()');
                }
	}
}