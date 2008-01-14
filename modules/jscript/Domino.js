// IBM Lotus Domino Web Access Control ActiveX Control
// CVE-2007-4474

function Domino() {
	this.General_ServerName="";
	this.General_JunctionName="";
	this.InstallBrowserHelperDll=function() {
		if ((this.General_ServerName.length > 1024) || (this.General_JunctionName.length > 1024)) {
			add_alert('Domino overflow with General_ServerName or General_JunctionName property');
		}
	}
	this.Mail_MailDbPath="";
	this.Mail_SetDefaultMailClient=function() {
		if (this.Mail_MailDbPath.length > 1024) {
			add_alert('Domino overflow with Mail_MailDbPath property');
		}	
	}
}