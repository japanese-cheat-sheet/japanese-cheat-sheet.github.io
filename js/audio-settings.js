function clearItem(){
    window.localStorage.removeItem("AUDIO")
}

if(window.localStorage.getItem("AUDIO") == null){
    window.localStorage.setItem("AUDIO", "1")
}
waitForElem(".audio-button").then(function(elem){
    if(window.localStorage.getItem("AUDIO") == "1") {
        elem.innerText = "ミュート（ＭＵＴＥ）"
    } else {
        elem.innerText = "ミュート解除（ＵＮＭＵＴＥ）"
    }
    console.log(window.localStorage.getItem("AUDIO"))
})

function toggleAudio(event){
    if(window.localStorage.getItem("AUDIO") == "1") {
        window.localStorage.setItem("AUDIO", "0")
        event.srcElement.innerText = "ミュート解除（ＵＮＭＵＴＥ）"
    } else {
        window.localStorage.setItem("AUDIO", "1")
        event.srcElement.innerText = "ミュート（ＭＵＴＥ）"
    }
}