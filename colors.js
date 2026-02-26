// light, dark
const COLORS = ["#E3E4E0","#12194C"]
if(
    window.localStorage.getItem("PRIMARY") == null || 
    window.localStorage.getItem("SECONDARY") == null || 
    window.localStorage.getItem("PRIMARY") != COLORS[0] || 
    window.localStorage.getItem("SECONDARY") != COLORS[1]
){
    window.localStorage.setItem("PRIMARY", COLORS[0])
    window.localStorage.setItem("SECONDARY", COLORS[1])
}
console.log(window.localStorage.getItem("PRIMARY"))
console.log(window.localStorage.getItem("SECONDARY"))

var r = document.querySelector(':root');
function setColors(array){
    var primary = ["--background", "--table-background", "--popup-backround",  "--select-text-color"]
    var secondary = ["--background2", "--heading-text-color", "--text-color", "--table-border-color", "--table-text-color", "--popup-text-color", "--popup-border-color","--select-backround","--border-color"]
    for(i=0;i<primary.length;i++){
        if(primary[i] == "--table-background") {
            r.style.setProperty(primary[i],array[0]+"AF")
        } else {
            r.style.setProperty(primary[i],array[0])
        }
    }
    for(i=0;i<secondary.length;i++){
        r.style.setProperty(secondary[i],array[1])
    }
}
setColors([window.localStorage.getItem("PRIMARY"),window.localStorage.getItem("SECONDARY")])

function toggleColors(){
        var temp = window.localStorage.getItem("PRIMARY")
        window.localStorage.setItem("PRIMARY", window.localStorage.getItem("SECONDARY"))
        window.localStorage.setItem("SECONDARY", temp)
        setColors([window.localStorage.getItem("PRIMARY"), window.localStorage.getItem("SECONDARY")])
}

setTimeout(function(){
    if(window.matchMedia("(pointer: coarse)").matches) {
        var double = "Ｄｏｕｂｌｅ　ｔａｐ　ｔｅｘｔ　ｔｏ\nｕｓｅ　Ｔｅｘｔ－Ｔｏ－Ｓｐｅｅｃｈ"
        document.getElementById("zoom-in/double").innerText = double
        document.getElementById("zoom-out").style.display = "none"
        var darkHint = document.getElementById("dark-mode")
        darkHint.innerText = darkHint.innerText.replace("　Ｐ　", "　ｈｅｒｅ　").replace("ｔｏｇｇｌｅ　","ｔｏｇｇｌｅ\n")
        darkHint.addEventListener("touchstart", function(){
            toggleColors()
        })  
    } else {
        document.addEventListener("keyup", function(){
            if(event.key === "p"){
                event.preventDefault()
                toggleColors()
            }
        })  
    }
},100)
