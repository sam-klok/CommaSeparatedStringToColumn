function addFewSymbols(){
    var txtInput = document.getElementById('txtInput').innerText;
    var newText = txtInput + " : modified text";
    var outputElement = document.getElementById('txtOutput');
    outputElement.innerText = newText;
}