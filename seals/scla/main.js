
            
// set value using id
//document.getElementById('txt').value = "Text Here";

// set value using input
//document.getElementsByTagName('input')[1].value = "Input Value";

function getAndSetVal()
{
    var txt1 = document.getElementById('txt').value;
    document.getElementById('txt2').value = txt1;
}

// get value
function getVal()
{
 var txt = document.getElementById('txt').value;
 alert(txt);
}
