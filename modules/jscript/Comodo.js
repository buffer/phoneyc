// Comodo AntiVirus 2.0
// CVE-NOMATCH

function Comodo() {
    this.ExecuteStr=function(cmd, args) {
	add_alert('Comodo will execute: ' + cmd + ' ' + args);
    }
}