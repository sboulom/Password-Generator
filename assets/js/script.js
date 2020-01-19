function generate(){

    let complexity = document.getElementById("slider").value;
    
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~0123456789";
    
    let password = "";
    

    for(var i =0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
    }
    
    document.getElementById("display").value = password;

}

document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value >0) {
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;    }
}

function copyToClipboard(){

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Copied to Clipboard");
}
