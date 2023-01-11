const inputImage = document.querySelector("#inputImage")
const btnReset = document.querySelector("#btnReset")
let main1 = document.querySelector(".main1")
let main2 = document.querySelector(".main2")
let randomNumber = Math.round(Math.random() * 10)
let biscuitMessage = document.querySelector(".screen2 p")

inputImage.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

function handleTryClick(event) {
  event.preventDefault()

  if(randomNumber >= 5) {
    biscuitMessage.innerText = `Procure acender uma vela em vez de amaldiçoar a escuridão`
  } else {
    biscuitMessage.innerText = `Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.`
  }

  toggleScreen()
}

function handleResetClick() {
  toggleScreen()
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  document.querySelector('.screen1').classList.toggle('hide')
  document.querySelector('.screen2').classList.toggle('hide')
}