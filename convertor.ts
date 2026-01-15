 function SplitString(src: string, separator: string): string{
    src = src.replace(/\n|\r/g,"");  // remove all line breaks

    var lines = src.split(separator)
        // trim spaces
        .map(function(item) { 
            return item.trim();
        })

        // remove empty strings
        .filter(function (el) {
            return el != null && el != "";
        })

        .join("\n " + separator + " ");
        //.join("<br>, ");   // we should not use BR.
    return lines;
};

 function SplitStringBehind(src: string, separator: string): string{
    src = src.replace(/\n|\r/g,"");  // remove all line breaks
    var parts = src.split(separator)
        // trim spaces
        .map(function(item) { 
            return item.trim(); 
        })

        // remove empty strings
        .filter(function (el) {
            return el != null && el != "";
        });

    var lines = parts.map(function(item, index){
        return item + (index < parts.length - 1 ? separator + " " : "");
    }).join("\n ");

    return lines;
};

// conversions 
function callSplitStringComma(){
    var sourceText = (document.getElementById('txtInput')! as HTMLTextAreaElement).value;
    (document.getElementById('txtOutput')! as HTMLTextAreaElement).innerHTML = SplitString(sourceText,",");
}

function callSplitStringCommaBehind(){
    var sourceText = (document.getElementById('txtInput')! as HTMLTextAreaElement).value;
    (document.getElementById('txtOutput')! as HTMLTextAreaElement).innerHTML = SplitStringBehind(sourceText,",");
}

function callSplitStringSemi(){
    var sourceText = (document.getElementById('txtInput')! as HTMLTextAreaElement).value;
    (document.getElementById('txtOutput')! as HTMLTextAreaElement).innerHTML = SplitString(sourceText,";");
}

function callSplitStringOr(){
    var sourceText = (document.getElementById('txtInput')! as HTMLTextAreaElement).value;
    (document.getElementById('txtOutput')! as HTMLTextAreaElement).innerHTML = SplitString(sourceText,"||");
}

// seting test data
function setTestDataSemi(){
    (document.getElementById('txtInput')! as HTMLTextAreaElement).innerHTML = "ID = id; Email = \nemail; Active = active; \nFirstName = firstName; LastName = \n lastName; Comment = comment;";
}

function setTestDataOr(){
    (document.getElementById('txtInput')! as HTMLTextAreaElement).innerHTML = "ID = \nid || Email = email || \nActive = \nactive || FirstName = firstName || LastName = \nlastName || Comment = comment";
}

document.getElementById("btnSetTestSemi")!.addEventListener('click',setTestDataSemi);
document.getElementById("btnSetTestOr")!.addEventListener('click',setTestDataOr);

document.getElementById("btnConvertComma")!.addEventListener('click',callSplitStringComma);
document.getElementById("btnConvertCommaBehind")!.addEventListener('click',callSplitStringCommaBehind);
document.getElementById("btnConvertSemi")!.addEventListener('click',callSplitStringSemi);
document.getElementById("btnConvertOr")!.addEventListener('click',callSplitStringOr);


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