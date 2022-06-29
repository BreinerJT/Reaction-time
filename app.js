const home = document.querySelector(".home")
const wait = document.querySelector(".wait")
const clickNow = document.querySelector(".click")
const soon = document.querySelector(".soon")
const time = document.querySelector(".time")
const banner = document.querySelector("#banner")
const reactionTime = document.querySelector(".reaction")

let currentDate = 0
let waitFlag = false

home.addEventListener("click", answerOverlay)
time.addEventListener("click", setBackToDefault)
soon.addEventListener("click", setBackToDefault)
wait.addEventListener("click", () => {
    waitFlag = true
    console.log(waitFlag)
})
    
function answerOverlay(){
    toggleBg(home, wait)
    toggleColor("primary", "danger")
    if(!wait.classList.contains("hide")){
        let randomTime = (Math.random() * 6) * 1000
        if(waitFlag){
            toggleBg(wait, soon)
            toggleColor("danger", "primary")
        }
        else{
            console.log(waitFlag)
            setTimeout(() => {
            currentDate = new Date().getTime()
            toggleBg(wait, clickNow)
            toggleColor("danger", "success")
            clickOverlay()
            }, randomTime)
        }
    }
}
    
function clickOverlay(){
    clickNow.addEventListener("click", () => {
        toggleBg(clickNow, time)
        toggleColor("success", "primary")
        let clickMs = new Date().getTime()
        let  msDifference = (clickMs - currentDate) 
        reactionTime.textContent = `${msDifference} ms`
    })
}    

function setBackToDefault(){
    wait.classList.add("hide")
    clickNow.classList.add("hide")
    soon.classList.add("hide")
    time.classList.add("hide")
    waitFlag = false
    answerOverlay()
}

function toggleBg(prevOverlay, newOverlay){
    prevOverlay.classList.add("hide")
    newOverlay.classList.remove("hide")
}
function toggleColor(prevColor, newColor){
    banner.classList.remove(`bg-${prevColor}`)
    banner.classList.add(`bg-${newColor}`)
}
