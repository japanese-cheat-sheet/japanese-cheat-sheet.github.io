waitForElem("JAPANESE","classAll").then(function(elems){
    setTimeout(function(){
        var JAelems = elems
        for (i=0;i<JAelems.length;i++) {
            var currentElem = JAelems[i]
            var currentList = currentElem.innerText.split(/{|}/)
            console.log(currentList)
        }
    },1) 
})