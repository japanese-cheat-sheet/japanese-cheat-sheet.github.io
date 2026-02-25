// light, dark

if(window.localStorage.getItem("colors") == null){
    var colors = ["#eeeeee", "#111111"]
    window.localStorage.setItem("colors", colors)
    console.log("test 1")
} else {
    var colors = window.localStorage.getItem("colors").split(",")
}


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
setColors(colors)

var toggle = false
function toggleColors(){
        window.localStorage.setItem("colors", [colors[1], colors[0]])
        setColors(window.localStorage.getItem("colors").split(","))
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
