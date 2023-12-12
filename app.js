var btnTransform = document.querySelector("#btn-transform");
var txtInput = document.querySelector("#txt-input");
var outPutDiv = document.querySelector("#output");

// var serverURL ="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
    var serverURL ="https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(text) {
    return serverURL +"?" + "text=" + text;
}

function errorHandler(error) {
    console.log("error occured" , error);
    alert("something wrong with server! try again after some time")
}

function clickHandler() {
        // outPutDiv.innerText = "ajajajajjsjs " + txtInput.value;
        var inputText = txtInput.value;
        fetch(getTranslationURL(inputText))
         .then(response=>response.json())
         .then(json=> {
            var translatedText = json.contents.translated;
            outPutDiv.innerText = translatedText;
         })

         .catch(errorHandler);
 } ;
 

btnTransform.addEventListener("click", clickHandler)


