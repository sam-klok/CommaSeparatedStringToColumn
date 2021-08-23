function SplitString(src: string): string{
    var lines = src.split(",")
                
                // trim spaces
                .map(function(item) { 
                    return item.trim();
                })

                // remove empty strings
                .filter(function (el) {
                    return el != null && el != "";
                })

                .join("\n, ");
                //.join("<br>, ");   // we should not use BR.
    return lines;
}

function callSplitString(){
    var sourceText = (document.getElementById('txtInput')! as HTMLTextAreaElement).value;
    //(document.getElementById('txtOutput')! as HTMLTextAreaElement).innerText = SplitString(sourceText);
    (document.getElementById('txtOutput')! as HTMLTextAreaElement).innerHTML = SplitString(sourceText);
    //document.getElementById('txtOutput')!.innerText = SplitString(sourceText);
}

document.getElementById("btnConvert")!.addEventListener('click',callSplitString);

//var btnConvert = document.getElementById("btnConvert");
//btnConvert!.addEventListener('click',addFewSymbols);


function addFewSymbols(){
    var elementInput = document.getElementById('txtInput');
    if (elementInput)
    {
        //var txtInput = elementInput.innerText;
        var txtInput = (elementInput as HTMLTextAreaElement).value;

        var newText = txtInput + " : modified text";

        document.getElementById('txtOutput')!.innerText = newText;  // look at "!" sign 

        // var outputElement = document.getElementById('txtOutput');
        // if (outputElement)
        // {
        //     outputElement.innerText = newText;
        // }
    }
}