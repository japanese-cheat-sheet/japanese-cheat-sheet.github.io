const synth = new SpeechSynthesisUtterance()
speechSynthesis.addEventListener("voiceschanged", () => {
    var voices = window.speechSynthesis.getVoices();
    //console.log(voices)
    synth.voice = voices[28]
});

//update with new ja-screen elements
waitForElemAll("ja-screen", 312).then(function(ja_screen){
    elems = ja_screen
    if(window.matchMedia("(pointer: coarse)").matches) {
        var clicker = "dblclick"
    } else {
        var clicker = "click"
    }
    for(i=0;i<elems.length;i++){
        elems[i].addEventListener(clicker,function(event){
            window.speechSynthesis.cancel()
            if(event.srcElement.parentElement.parentElement.parentElement.className == "particle-area"){
                if(event.srcElement.innerHTML.split("<")[0] == "は"){
                    synth.text = "わ"
                } else if (event.srcElement.innerHTML.split("<")[0] == "へ"){
                    synth.text = "え"
                } else if (event.srcElement.innerHTML.split("<")[0] == "を"){
                    synth.text = "お"
                } else {
                    synth.text = event.srcElement.innerHTML.split("<")[0]
                }
            } else {
                synth.text = event.srcElement.innerHTML.split("<")[0]
            }
            synth.lang = "ja"
            window.speechSynthesis.speak(synth) 
        })
    }
})