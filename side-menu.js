if(window.matchMedia("(pointer: coarse)").matches == false) {
    window.addEventListener("resize",function(){
        var devicePixelRatio = window.devicePixelRatio || 1
        var zoom =  120 + (100 - Math.round(devicePixelRatio* 100))  + "%"
        document.getElementById("side-menu-button").style.zoom = zoom
        document.getElementById("side-menu").style.zoom = zoom
    })
}

function scrollById(Name){
    var elemRect = document.getElementById(Name).getBoundingClientRect()
    window.scrollTo(0,elemRect.top + window.scrollY - 125 )
}

setTimeout(function(){
    var sideToggle = false
    var button = document.getElementById("side-menu-button")
    var menu = document.getElementById("side-menu")

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

    var list = [
        ["日本語（ＪＡＰＡＮＥＳＥ）","window.scrollTo(0,0)", 1],
        ["平仮名（ＨＩＲＡＧＡＮＡ）","scrollById('hiragana')", 1],
        ["片仮名（ＫＡＴＡＫＡＮＡ）","scrollById('katakana')", 1],
        ["助詞（ＰＡＲＴＩＣＬＥＳ）","scrollById('particle-title')", 1],
        ["格助詞（ＣＡＳＥ　ＰＡＲＴＩＣＬＥＳ）","scrollById('case-particles')",2],
        ["並立助詞（ＰＡＲＡＬＬＥＬ　ＰＡＲＴＩＣＬＥＳ）","scrollById('parallel-particles')",2],
        ["終助詞（ＳＥＮＴＥＮＣＥ－ＥＮＤＩＮＧ　ＰＡＲＴＩＣＬＥＳ）","scrollById('sentence-ending-particles')",2],
        ["間投助詞（ＩＮＴＥＲＪＥＣＴＯＲＹ　ＰＡＲＴＩＣＬＥＳ）","scrollById('interjectory-particles')",2],
        ["副助詞（ＡＤＶＥＲＢＩＡＬ　ＰＡＲＴＩＣＬＥＳ）","scrollById('adverbial-particles')",2],
        ["係助詞（ＢＩＮＤＩＮＧ　ＰＡＲＴＩＣＬＥＳ）","scrollById('binding-particles')",2],
        ["接続助詞（ＣＯＮＪＵＮＣＴＩＶＥ　ＰＡＲＴＩＣＬＥＳ）","scrollById('conjunctive-particles')",2],
        ["準体助詞（ＮＯＲＭＡＬＩＳＩＮＧ　ＰＡＲＴＩＣＬＥＳ）","scrollById('normalising-particles')",2]
    ]

    function addContents(array){
        var container = document.getElementById("side-menu-text")
        for(i=0;i<array.length;i++){
            var current = document.createElement("a")
            current.className = "menu-option"
            current.id = "type" + array[i][2]
            current.setAttribute("onclick",array[i][1])
            current.innerText = array[i][0]
            container.appendChild(current)
        }
    }
    addContents(list)
},100)
