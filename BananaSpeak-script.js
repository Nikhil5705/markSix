var translatebtn = document.querySelector("#translatebtn");
var inputtext = document.querySelector("#inputtext");
var outputtext = document.querySelector("#outputtext");


var translationURL = "https://api.funtranslations.com/translate/minion.json"


function clickEventHandler(){
    
 var textinput = inputtext.value;

newUrl = `${translationURL}?text=${textinput}`
fetch(newUrl).then((data) => data.json()).then((data) => {
    // console.log(data);
    outputtext.innerText = data.contents.translated;
}

)

}; 

translatebtn.addEventListener("click", clickEventHandler)
