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

function setColors(array){
    var r = document.querySelector(':root');
    r.style.setProperty("--PRIMARY",array[0])
    r.style.setProperty("--PRIMARYalpha",array[0]+"AF")
    r.style.setProperty("--PRIMARYlowAlpha",array[0]+"DD")
    r.style.setProperty("--SECONDARY",array[1])
}

function toggleColors(){
    var temp = window.localStorage.getItem("PRIMARY")
    window.localStorage.setItem("PRIMARY", window.localStorage.getItem("SECONDARY"))
    window.localStorage.setItem("SECONDARY", temp)
    setColors([window.localStorage.getItem("PRIMARY"), window.localStorage.getItem("SECONDARY")])
}

setColors([window.localStorage.getItem("PRIMARY"),window.localStorage.getItem("SECONDARY")])