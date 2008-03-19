// Registry Pro (epRegPro.ocx)
// CVE-NOMATCH

function RegistryPro() {
    this.DeleteKey=function(arg0, arg1) {
	if (arg0 == 80000002) {
	    add_alert('RegistryPro deleting HKEY_LOCAL_MACHINE key ' + arg1);
	}
	if (arg0 == 80000001) {
	    add_alert('RegistryPro deleting HKEY_CURRENT_USER key ' + arg1);
	}
    }
    this.About=function() {
	add_alert('RegistryPro called About()');
    }
    
}

/*
other API methods we should look at:

		About	 	Displays the Registry Pro About Dialog.
		CreateKey	 	Creates a registry key.
		DeleteBranch	 Deletes a branch and all it child keys and values.
		DeleteKey	 	Deletes one registry key.
		DeleteValue	 	Deletes one registry value.
		EnumKeys	 	Returns a collection containing all keys within a specified branch.
		EnumValues	 	Returns a collection containing all values within a specified key.
		QueryType	 	Returns a value type.
		QueryValue	 	Returns a value.
		RenameKey	 	Renames a key.
		SetValue	 	Sets or creates a value.
 */
