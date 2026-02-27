setTimeout(function(){
    if(window.matchMedia("(pointer: coarse)").matches) {
        var double = "Ｄｏｕｂｌｅ　ｔａｐ　ｔｅｘｔ　ｔｏ\nｕｓｅ　Ｔｅｘｔ－Ｔｏ－Ｓｐｅｅｃｈ"
        document.getElementById("zoom-in/double").innerText = double
        document.getElementById("zoom-out").style.display = "none"
        var darkHint = document.getElementById("dark-mode")
        darkHint.innerText = darkHint.innerText.replace("　Ｐ　", "　ｈｅｒｅ　").replace("ｔｏｇｇｌｅ　","ｔｏｇｇｌｅ\n")
        darkHint.addEventListener("touchstart", function(){
            toggleColors() // colors.js
        })  
    } else {
        document.addEventListener("keyup", function(){
            if(event.key === "p"){
                event.preventDefault()
                toggleColors() // colors.js
            }
        })  
    }
},1)