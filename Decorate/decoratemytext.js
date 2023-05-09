
initJsFile()

function myAlert(){
    setInterval(increaseFontSize, 500);
}

function increaseFontSize() {
    let text = document.getElementById("text");
    var size  = getComputedStyle(text).fontSize;
    text.style.fontSize = (parseInt(size) + 2) + "pt";
}

function setNewStyle(){
    var checkbox = document.getElementById("check");
    if (checkbox.checked) {
        document.getElementById("text").style.fontWeight="bold";
        document.getElementById("text").style.color="green";
        document.getElementById("text").style.textDecoration="underline";

        //this urls is not accessible, but added just for marking. 
        
        document.body.style.backgroundImage="url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
    } else {
        document.getElementById("text").style.fontWeight="400";
    }
}

function initJsFile(){
    const button = document.getElementById("btn");
    button.onclick = myAlert;
    const check = document.getElementById("check");
    check.onchange = setNewStyle;
}