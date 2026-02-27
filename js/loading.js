function loadingAnimation(){
    waitForElem("#loading-cover").then(function(elem){
        elem.style.opacity = 0;
        elem.style.transition = "opacity 1s"
        setTimeout(function(){
        elem.style.display = "none";
        },1000)
    })
}

if(window.sessionStorage.getItem("playAnimation") == null){
    waitForElem("#loading-cover").then(function(elem){
        elem.style.opacity = 1;
        loadingAnimation()
        window.sessionStorage.setItem("playAnimation", true)
    })
}
