
document.getElementById("tArea").innerHTML = localStorage.getItem("localStorage");

function addTask() {
    let x = document.getElementById("txtInput").value;
    document.getElementById("tArea").value += x + "\n";
    document.getElementById("txtInput").value = "";
    localStorage.setItem("localStorage", document.getElementById("tArea").value);
}

function clearTask() {
    document.getElementById("tArea").value = "";
}