if(window.matchMedia("(pointer: coarse)").matches) {
    var double = "Ｄｏｕｂｌｅ　ｔａｐ　ｔｅｘｔ　ｔｏ\nｕｓｅ　Ｔｅｘｔ－Ｔｏ－Ｓｐｅｅｃｈ"
    waitForElem("#zoom-in-double").then(function(elem){
        elem.innerText = double
    })
    waitForElem("#zoom-out").then(function(elem){
        elem.style.display = "none"
    })
    waitForElem("#dark-mode").then(function(elem){
        elem.innerText = elem.innerText.replace("　Ｐ　", "　ｈｅｒｅ　").replace("ｔｏｇｇｌｅ　","ｔｏｇｇｌｅ\n")
        elem.addEventListener("touchstart", function(){
            toggleColors() // colors.js
        })  
    })
} else {
    document.addEventListener("keyup", function(){
        if(event.key === "p"){
            event.preventDefault()
            toggleColors() // colors.js
        }
    })  
}