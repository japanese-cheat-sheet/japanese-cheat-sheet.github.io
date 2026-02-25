// light, dark
var colors = ["#eeeeee", "#111111"]

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
function toggleColors(event){
    if(event.key === "p"){
        event.preventDefault()
        colors = [colors[1], colors[0]]
        setColors(colors)
    }
}
document.addEventListener("keyup", toggleColors)