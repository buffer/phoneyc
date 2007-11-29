// Microsoft Internet Explorer 6 WebViewFolderIcon 
// CVE-2006-3730

function WebViewFolderIcon() {
        this.setSlice=function(arg0, arg1, arg2, arg3) {
                if (arg0 == 0x7ffffffe) {
                        add_alert('WebViewFolderIcon.setSlice attack');
                }
        }
}