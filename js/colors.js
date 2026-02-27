// use if changing color scheme
function clearColors(){
    window.localStorage.setItem("PRIMARY", null)
    window.localStorage.setItem("SECONDARY", null)
}

// light, dark
const COLORS = ["#E3E4E0","#0E1540"]
if(window.localStorage.getItem("PRIMARY") == null || window.localStorage.getItem("SECONDARY") == null){
    window.localStorage.setItem("PRIMARY", COLORS[0])
    window.localStorage.setItem("SECONDARY", COLORS[1])
}
if(window.localStorage.getItem("PRIMARY") == COLORS[0]){
    waitForElem("#type-dark-mode").then(function(darkmode){
        darkmode.innerText = "ダークモード（ＤＡＲＫ　ＭＯＤＥ）"
    })
} else {
    waitForElem("#type-dark-mode").then(function(darkmode){
        darkmode.innerText = "ライトモード（ＬＩＧＨＴ　ＭＯＤＥ）"
    })
}

function setColors(array){
    var r = document.querySelector(':root');
    r.style.setProperty("--PRIMARY",array[0])
    r.style.setProperty("--PRIMARYalpha",array[0]+"AF")
    r.style.setProperty("--PRIMARYlowAlpha",array[0]+"DD")
    r.style.setProperty("--SECONDARY",array[1])
}

function toggleColors(event){
    var temp = window.localStorage.getItem("PRIMARY")
    window.localStorage.setItem("PRIMARY", window.localStorage.getItem("SECONDARY"))
    window.localStorage.setItem("SECONDARY", temp)
    setColors([window.localStorage.getItem("PRIMARY"), window.localStorage.getItem("SECONDARY")])
    if(window.localStorage.getItem("PRIMARY") == COLORS[0]){
        event.srcElement.innerText = "ダークモード（ＤＡＲＫ　ＭＯＤＥ）"
    } else {
        event.srcElement.innerText = "ライトモード（ＬＩＧＨＴ　ＭＯＤＥ）"
    }
}

setColors([window.localStorage.getItem("PRIMARY"),window.localStorage.getItem("SECONDARY")])