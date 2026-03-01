// padding ajustments for ヴ
waitForElem("#group-231-screen").then(function(elem){
    elem.style.paddingLeft = "25px"
    elem.style.paddingRight = "25px"
})

fetch('js/json/particles.json').then(response => {
    return response.json();
}).then(data => {
    window.localStorage.setItem("PARTICLE-TEXT-DATA",JSON.stringify(data))
})

const TEXTDATA = JSON.parse(window.localStorage.getItem("PARTICLE-TEXT-DATA"))
console.log(TEXTDATA)
async function addParticleBox(particle, text, container){
    waitForElemAll("particle-container",8).then(function(elems){
        var containers = elems
        var main = document.createElement("main")
        var particleArea = document.createElement("div")
        particleArea.className = "particle-area"
        var table = document.createElement("table")
        var tableInner = document.createElement("th")
        tableInner.id = "particle"
        tableInner.className = "ja-text"
        tableInner.innerText = particle
        table.appendChild(tableInner)
        particleArea.appendChild(table)
        main.appendChild(particleArea)
        for(k=0;k<text.length;k++){
            var textBox = document.createElement("p")
            textBox.innerText = text[k]
            main.appendChild(textBox)
        }
        containers[container].appendChild(main)
    })
}

for(i=0;i<Object.values(TEXTDATA).length;i++){
    // i = container
    for(j=0;j<Object.entries(Object.values(TEXTDATA)[i]).length;j++){
        var currentParticle = Object.entries(Object.values(TEXTDATA)[i])[j][0]
        // currentParticle = particle
        var currentText = Object.values(Object.entries(Object.values(TEXTDATA)[i])[j][1])
        // currentText = text
        addParticleBox(currentParticle,currentText,i)
    }
}


