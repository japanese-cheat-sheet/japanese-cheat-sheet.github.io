// https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists

function waitForElem(name, misc){
    function getElem(value){
        if(misc == null){
            return document.querySelector(value)
        } else if(misc == "classAll"){
            return document.getElementsByClassName(value)
        }
    }

    return new Promise(resolve => {
        if(getElem(name)){
            return resolve(getElem(name))
        }

        const observer = new MutationObserver(mutations => {
            if (getElem(name)) {
                observer.disconnect();
                resolve(getElem(name));
            }
        });

        observer.observe(document.documentElement, {
            childList: true,
            subtree: true
        });

    })
}