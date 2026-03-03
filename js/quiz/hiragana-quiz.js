var hiraganaContent
hiraganaContent = await fetch("../js/json/hiragana.json")
.then(responce => responce.json())
var allHiraganaKana = ["test1","test2","test3","test4","test5"]//Object.keys(hiraganaContent)
var allHiraganaAnswers = ["test1","test2","test3","test4","test5"]//Object.values(hiraganaContent)
var hiraganaTotalNum = allHiraganaKana.length
var hiraganaTotalCorrect = 0

var hiraganaInput, hiraganaSubmitButton, hiraganaDisplay,
hiraganaQuizElems, hiraganaResultsElem, hiraganaResultTitle, hiraganaResultInfo
hiraganaInput = await waitForElem("#hiragana-input").then(responce => responce)
hiraganaSubmitButton = await waitForElem("#hiragana-submit").then(responce => responce)
hiraganaDisplay = await waitForElem("#hiragana-display").then(responce => responce)
hiraganaQuizElems = await waitForElem("#hiragana-center").then(responce => responce)
hiraganaResultsElem = await waitForElem("#hiragana-results").then(responce => responce)
hiraganaResultTitle = await waitForElem("#hiragana-result-title").then(responce => responce)
hiraganaResultInfo = await waitForElem("#hiragana-result-info").then(responce => responce)

function hiraReset(){
    allHiraganaKana = Object.keys(hiraganaContent)
    allHiraganaAnswers = Object.values(hiraganaContent)
    hiraganaInput.value = ""
    hiraganaResultTitle.innerText = ""
    hiraganaResultInfo.innerText = ""
    hiraganaTotalCorrect = 0
    hiraganaResultsElem.style.display = "none"
    hiraganaQuizElems.style.display = "block"
    hiraSetQuestion()
}

function hiraSubmit(){
    if((event.key == "Enter" || event.type == "click") && hiraganaInput.value != ""){
        console.log(allHiraganaKana.length)
        if(hiraganaInput.value.toUpperCase() == hiraganaCurrentAnswer){
            hiraganaInput.blur()
            hiraganaInput.value = ""
            hiraResult(true)
        } else {
            hiraganaInput.blur()
            hiraganaInput.value = ""
            hiraResult(false)
        }
    } else {
        return
    }
}

function hiraResult(correct){
    var delay = 750
    if(correct){
        var extra = 0
        hiraganaTotalCorrect += 1
        hiraganaResultTitle.innerText = "ＣＯＲＲＥＣＴ"
        hiraganaResultInfo.innerText = "おつかれ！ (good job!)　ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧\n\n\n"
        if(allHiraganaKana.length == 1){
            hiraganaQuizElems.style.display = "none"
            hiraganaResultsElem.style.display = "block"
            setTimeout(function(){
                hiraQuizComplete()
            },delay+200)
            return null
        }
    } else {
        var extra = 1750
        hiraganaResultTitle.innerText = "ＩＮＣＯＲＲＥＣＴ"
        hiraganaResultInfo.innerText = hiraganaCurrentQuestion + ` is "` + hiraganaCurrentAnswer.toLowerCase() + `" in romaji\n Don't worry, you got it next time\n\n(ﾉ^ヮ^)ﾉ　頑張って！`
        if(allHiraganaKana.length == 1){
            hiraganaQuizElems.style.display = "none"
            hiraganaResultsElem.style.display = "block"
            setTimeout(function(){
                hiraQuizComplete()
            },delay+extra+200)
            return null
        }
    }
    hiraganaQuizElems.style.display = "none"
    hiraganaResultsElem.style.display = "block"
    var index = allHiraganaKana.indexOf(hiraganaCurrentQuestion)
    allHiraganaKana.splice(index, 1)
    allHiraganaAnswers.splice(index, 1)
    hiraSetQuestion()
    setTimeout(function(){
        hiraganaResultsElem.style.display = "none"
        hiraganaQuizElems.style.display = "block"
        hiraganaInput.focus()
    },delay+extra)
}

function hiraQuizComplete(){
    hiraganaQuizElems.style.display = "none"
    hiraganaResultTitle.innerText = "ＣＯＭＰＬＥＴＥ"
    var hiraganaPercentage = (hiraganaTotalCorrect/hiraganaTotalNum)*100
    if(hiraganaPercentage == 100){
        var extraText = "\n\nPerfect Score　ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧\n\n"
    } else if ((hiraganaPercentage < 100 && hiraganaPercentage >= 66)){
        var extraText = "\n\nGood Score　<(￣︶￣)>\n\n"
    } else if ((hiraganaPercentage < 66 && hiraganaPercentage >= 33)){
        var extraText = "\n\nNot Bad　(ﾉ^ヮ^)ﾉ\n\n"
    } else {
        var extraText = "\n\nThere's room for improvement　(´-ω-`( _ _ )\n\n"
    }
    hiraganaResultInfo.innerText = "You Got " + Math.round(hiraganaPercentage*100)/100 + "% " + "("+ hiraganaTotalCorrect +"/"+ hiraganaTotalNum +")" + extraText
    hiraganaResultsElem.style.display = "block"
}

var hiraganaCurrentQuestion
var hiraganaCurrentAnswer
function hiraSetQuestion(){
    var currentIndex = Math.floor(Math.random()*allHiraganaKana.length)
    hiraganaCurrentQuestion = allHiraganaKana[currentIndex]
    hiraganaCurrentAnswer = allHiraganaAnswers[currentIndex].toUpperCase()
    hiraganaDisplay.innerText = hiraganaCurrentQuestion
}


function hiraClearSpaces(){
    if(event.key == "Enter" || event.key == " "){
        event.preventDefault();
    }
}



waitForElem("#hiragana-quiz").then(function(hiraganaButton){
var hiraganaQuizMode = false
hiraganaButton.innerText = "クイズ・モード・オフ（ＱＵＩＺ　ＭＯＤＥ　ＯＦＦ）"
hiraganaButton.addEventListener("click", function(){
    if(hiraganaQuizMode == false){
        hiraganaButton.innerText = "クイズ・モード・オン（ＱＵＩＺ　ＭＯＤＥ　ＯＮ）"
        waitForElem("#hiragana-contents").then(function(hiraganaContainer){
            waitForElem("#hiragana-quiz-contents").then(function(hiraganaQuizContainer){
                hiraganaContainer.style.display = "none"
                hiraganaQuizContainer.style.display = "block"
                hiraSetQuestion()
            })
        })
        hiraganaQuizMode = true
    } else {
        hiraganaButton.innerText = "クイズ・モード・オフ（ＱＵＩＺ　ＭＯＤＥ　ＯＦＦ）"
        waitForElem("#hiragana-contents").then(function(hiraganaContainer){
            waitForElem("#hiragana-quiz-contents").then(function(hiraganaQuizContainer){
                hiraganaContainer.style.display = "block"
                hiraganaQuizContainer.style.display = "none"
                hiraReset()
            })
        })
        hiraganaQuizMode = false
    }
})
})

hiraganaInput.addEventListener("keyup",hiraSubmit)
hiraganaInput.addEventListener("keydown",hiraClearSpaces)
hiraganaSubmitButton.addEventListener("click",hiraSubmit)
