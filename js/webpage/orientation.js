

function editOrientation(){
    if(window.matchMedia("(pointer: coarse)").matches){
        waitForElem("#main-heading").then(function(mainHeading){
        waitForElem("#main-subheading").then(function(mainSubHeading){
        waitForElem("#scroll-guide").then(function(scroll){
        waitForElem("#main-arrow").then(function(arrow){
            if(window.orientation != 0){
                mainHeading.style.fontSize = "25vw"
                mainSubHeading.style.fontSize = "7vw"
                scroll.style.fontSize = "4vw"
                arrow.style.fontSize = "5vw"
            } else {
                mainHeading.style.fontSize = "30vw"
                mainSubHeading.style.fontSize = "10vw"
                scroll.style.fontSize = "6vw"
                arrow.style.fontSize = "6vw"
            }
        })
        })
        })
        })
    }
}

editOrientation()
window.addEventListener("orientationchange",editOrientation)