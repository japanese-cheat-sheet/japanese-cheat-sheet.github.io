function adjustZoom(){
    var devicePixelRatio = window.devicePixelRatio || 1
    var zoom =  100 + (100 - Math.round(devicePixelRatio* 100))  + "%"
    waitForElem("#side-menu-button").then(function(button){
        button.style.zoom = zoom
    })
    waitForElem("#side-menu").then(function(menu){
        menu.style.zoom = zoom
    })
}

if(window.matchMedia("(pointer: coarse)").matches == false) {
    adjustZoom()
    window.addEventListener("resize",function(){
        adjustZoom()
    })
}

function scrollById(event,Name){
    var menuA = event.srcElement.getBoundingClientRect()
    var elem = document.getElementById(Name)
    var elemRect = elem.getBoundingClientRect()
    var topPadding = Number(window.getComputedStyle(elem, null).getPropertyValue('padding-top').replace("px",""))
    if(window.matchMedia("(pointer: coarse)").matches == false) {
        window.scrollTo(0,elemRect.top + window.scrollY - menuA.top + menuA.height/2 + (topPadding/2 * window.devicePixelRatio))
    } else {
        window.scrollTo(0,elemRect.top + window.scrollY - menuA.top + menuA.height/2 + topPadding/2 - 12)
    }
}

var sideToggle = false
waitForElem("#side-menu-button").then(function(button){
    waitForElem("#side-menu").then(function(menu){
        button.addEventListener("click",function(){
            if(sideToggle){
                button.innerText = "☰"
                button.style.fontWeight = "400"
                menu.style.transform = "translateX(-100%)"
                sideToggle = false
            } else {
                button.innerText = "✕"
                button.style.fontWeight = "600"
                menu.style.transform = "translateX(0px)"
                sideToggle = true
            }
        })
    })
})

    

document.addEventListener("click",function(event){
    var counter = 0
    waitForElem("#side-menu-button").then(function(button){
        waitForElem("#side-menu").then(function(menu){
            waitForElem("#menu-button-area").then(function(banner){
                if(!button.contains(event.target)){
                    counter++
                }
                if(!menu.contains(event.target)){
                    counter++
                }
                if(!banner.contains(event.target)){
                    counter++
                }
                if(counter == 3){
                    button.innerText = "☰"
                    button.style.fontWeight = "400"
                    menu.style.transform = "translateX(-100%)"
                    sideToggle = false
                }
            })
        })
    })
})

var list = [
    ["","toggleColors(event)", "-dark-mode"],
    ["","", 0],
    ["日本語（ＪＡＰＡＮＥＳＥ）","window.scrollTo(0,0)", 1],
    ["平仮名（ＨＩＲＡＧＡＮＡ）","scrollById(event,'hiragana')", 1],
    ["片仮名（ＫＡＴＡＫＡＮＡ）","scrollById(event,'katakana')", 1],
    ["助詞（ＰＡＲＴＩＣＬＥＳ）","scrollById(event,'particle-title')", 1],
    ["格助詞（ＣＡＳＥ　ＰＡＲＴＩＣＬＥＳ）","scrollById(event,'case-particles')",2],
    ["並立助詞（ＰＡＲＡＬＬＥＬ　ＰＡＲＴＩＣＬＥＳ）","scrollById(event,'parallel-particles')",2],
    ["終助詞（ＳＥＮＴＥＮＣＥ－ＥＮＤＩＮＧ　ＰＡＲＴＩＣＬＥＳ）","scrollById(event,'sentence-ending-particles')",2],
    ["間投助詞（ＩＮＴＥＲＪＥＣＴＯＲＹ　ＰＡＲＴＩＣＬＥＳ）","scrollById(event,'interjectory-particles')",2],
    ["副助詞（ＡＤＶＥＲＢＩＡＬ　ＰＡＲＴＩＣＬＥＳ）","scrollById(event,'adverbial-particles')",2],
    ["係助詞（ＢＩＮＤＩＮＧ　ＰＡＲＴＩＣＬＥＳ）","scrollById(event,'binding-particles')",2],
    ["接続助詞（ＣＯＮＪＵＮＣＴＩＶＥ　ＰＡＲＴＩＣＬＥＳ）","scrollById(event,'conjunctive-particles')",2],
    ["準体助詞（ＮＯＲＭＡＬＩＳＩＮＧ　ＰＡＲＴＩＣＬＥＳ）","scrollById(event,'normalising-particles')",2]
]

function addContents(array){
    waitForElem("#side-menu-text").then(function(container){
            for(i=0;i<array.length;i++){
            var current = document.createElement("a")
            current.className = "menu-option"
            current.id = "type" + array[i][2]
            current.setAttribute("onclick",array[i][1])
            current.innerText = array[i][0]
            container.appendChild(current)
        }
    })
}
addContents(list)
