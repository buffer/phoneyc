
                        
function waiting()
{
window.focus();
setTimeout('window.location = "http://www.Webtownring.com/home.php"', 15000);
setInterval('if (parseFloat(document.getElementById("delay").innerHTML)-1 >= 0) { document.getElementById("delay").innerHTML = parseFloat(document.getElementById("delay").innerHTML)-1; }', 1000);
}

 function popup(url, name, features) {

        var defaultfeatures='scrollbars=yes,resizable=yes,width=480,height=200,left=200,top=200'
                if (features == null ) {
                        features = defaultfeatures;
                        }
                if (name == null ) {
                        name = 'popup'
                        }
                window.open(url, name, features);
        }
;;
