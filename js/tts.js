const synth = new SpeechSynthesisUtterance()
speechSynthesis.addEventListener("voiceschanged", () => {
    var voices = window.speechSynthesis.getVoices();
    //console.log(voices)
    synth.voice = voices[28]
});

setTimeout(function(){
    var elems = document.getElementsByClassName("ja-screen")
    if(window.matchMedia("(pointer: coarse)").matches) {
        var clicker = "dblclick"
    } else {
        var clicker = "click"
    }
    for(i=0;i<elems.length;i++){
        elems[i].addEventListener(clicker,function(event){
            window.speechSynthesis.cancel() 
            if(event.srcElement.parentElement.parentElement.id == "particle"){
                if(event.srcElement.innerText == "は"){
                    synth.text = "わ"
                } else if (event.srcElement.innerText == "へ"){
                    synth.text = "え"
                } else if (event.srcElement.innerText == "を"){
                    synth.text = "お"
                } else {
                    synth.text = event.srcElement.innerText
                }
            } else {
                synth.text = event.srcElement.innerText
            }
            synth.lang = "ja"
            window.speechSynthesis.speak(synth) 
        })
    }
},1)