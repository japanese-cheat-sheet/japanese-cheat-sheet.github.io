function loadingAnimation(){
    setTimeout(function(){
        var elem = document.getElementById("loading-cover")
        elem.style.opacity = 0;
        console.log("complete")
        setTimeout(function(){
            elem.style.display = "none";
            var html = document.getElementsByTagName("html")
            document.html.style.overflow = "visible"
        },1000)
    },1750)
}


if(window.sessionStorage.getItem("playAnimation") == null){
    setTimeout(function(){
        var elem = document.getElementById("loading-cover")
        elem.style.opacity = 1;
        loadingAnimation()
        window.sessionStorage.setItem("playAnimation", true)
    },1)
} else {
    setTimeout(function(){
        var elem = document.getElementById("loading-cover")
        elem.style.display = "none"
    },1)
}