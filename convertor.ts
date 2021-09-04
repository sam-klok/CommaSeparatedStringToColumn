 function SplitString(src: string, separator: string): string{
    var lines = src.split(separator)
                
                // trim spaces
                .map(function(item) { 
                    return item.trim();
                })

                // remove empty strings
                .filter(function (el) {
                    return el != null && el != "";
                })

                .join("\n,");
                //.join("<br>, ");   // we should not use BR.
    return lines;
};

function callSplitStringComma(){
    var sourceText = (document.getElementById('txtInput')! as HTMLTextAreaElement).value;
    (document.getElementById('txtOutput')! as HTMLTextAreaElement).innerHTML = SplitString(sourceText,",");
}

function callSplitStringSemi(){
    var sourceText = (document.getElementById('txtInput')! as HTMLTextAreaElement).value;
    (document.getElementById('txtOutput')! as HTMLTextAreaElement).innerHTML = SplitString(sourceText,";");
}

document.getElementById("btnConvertComma")!.addEventListener('click',callSplitStringComma);
document.getElementById("btnConvertSemi")!.addEventListener('click',callSplitStringSemi);






// another test method, ignore it
function addFewSymbols(){
    var elementInput = document.getElementById('txtInput');
    if (elementInput)
    {
        //var txtInput = elementInput.innerText;
        var txtInput = (elementInput as HTMLTextAreaElement).value;
        var newText = txtInput + " : modified text";
        document.getElementById('txtOutput')!.innerText = newText;  // look at "!" sign 
    }
};