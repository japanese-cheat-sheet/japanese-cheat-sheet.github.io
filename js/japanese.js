waitForElemAll("ja-text", 253).then(function(elem){
    var JAelems = elem
    for (i=0;i<JAelems.length;i++) {
        var currentElem = JAelems[i]
        var currentList = currentElem.innerText.split(/{|}/)
        currentList = currentList.filter(function(e){return e})
        for(j=0;j<currentList.length;j++){
            // Hiragana | Katakana | a-z | Kanji
            if(currentList[j].match(/[\u3040-\u30a0]|[\u30a0-\u30ff]|[\u0061-\u007A]|[\u4e00-\u9faf]/)){
                currentList[j] = [currentList[j], true, currentElem]
                
            } else {
                currentList[j] = [currentList[j], false]
            }
        }
        var workingList = Object.assign({}, currentList);
        for(j=0;j<Object.keys(workingList).length;j++){
            if(workingList[j][1] == false){
                delete workingList[j]
            }
        }

        for(j=0;j<Object.keys(workingList).length;j++){
            if(j%2==0){
                workingList[j][2].innerText = ""
                var screenSpan = document.createElement("span")
                var hiraKata = workingList[j][0].match(/[\u3040-\u30ff]|[\u30a0-\u30ff]/)
                var tableChecker = workingList[j][2].parentElement.parentElement.tagName
                if(tableChecker == "TBODY" && hiraKata && workingList[j][0].length == 1){
                    screenSpan.className = "ja-screen singleKana"
                } else if(tableChecker == "TBODY" && hiraKata && workingList[j][0].length == 2){
                    screenSpan.className = "ja-screen doubleKana"
                } else if(tableChecker == "DIV" && hiraKata && workingList[j][0].length >= 2){
                    screenSpan.className = "ja-screen moreParticle"
                } 
                else {
                    screenSpan.className = "ja-screen"
                }
                screenSpan.innerText = workingList[j][0]
                screenSpan.id = "group" + i + "-screen"
                workingList[j][2].append(screenSpan)
            } else {
                var popupSpan = document.createElement("span")
                popupSpan.id = "group" + i + "-popup"
                if(tableChecker == "TBODY" && hiraKata){
                    popupSpan.className = "ja-popup hirakata"
                } else if(tableChecker == "DIV" && hiraKata){
                    popupSpan.className = "ja-popup particle"
                } else{
                    popupSpan.className = "ja-popup"
                }
                popupSpan.innerText = workingList[j][0]
                workingList[j][2].append(popupSpan)
                popupSpan.style.display = "none"
                
            }
        }
    }
    var popupElems = document.getElementsByClassName("ja-popup")
    var screenElems = document.getElementsByClassName("ja-screen")
    for(i=0;i<screenElems.length;i++){
        screenElems[i].addEventListener("mouseenter",function(event){
            var popupElement = document.getElementById(event.target.id.replace("screen","popup"))
            popupElement.style.display = "block"

            var textRect = event.target.getBoundingClientRect()
            popupElement.style.minWidth = event.target.getBoundingClientRect().width + "px"
            
            var popupRect = popupElement.getBoundingClientRect()


            if(event.target.parentElement.tagName == "TH"){
                popupElement.style.top = textRect.top - event.target.parentElement.getBoundingClientRect().top - popupRect.height + 12 + "px"
            } else {
                popupElement.style.top = textRect.top - event.target.parentElement.getBoundingClientRect().top - popupRect.height + "px"
            }
            popupElement.style.left = textRect.left - event.target.parentElement.getBoundingClientRect().left - (popupRect.width - event.target.getBoundingClientRect().width)/2 + "px"
        })
        
        screenElems[i].addEventListener("mouseleave",function(event){
            var popupElement = document.getElementById(event.target.id.replace("screen","popup"))
            popupElement.style.display = "none"
        })
            
            
        
    }
})

    

         