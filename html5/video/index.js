const msg = new SpeechSynthesisUtterance()
let voices = []
const voiceDropdown = document.querySelector('[name="voice"]')
const options = document.querySelectorAll('[type = "range"],[name = "text"]')
const speakButton = document.querySelector('#speak')
const stopButton = document.querySelector('#stop')
msg.text = document.querySelector('[name = "text"]').value

function populateVoice() {
    voices = this.getVoices()
    voiceDropdown.innerHTML = voices.filter(voice => voice.lang.includes('en'))
        .map(voice => `<option value="${voice.name}">${voice.name}(${voice.lang})</option>`)
        .join('')
}


function toggle(startOver = true) {
    speechSynthesis.cancel()
    if (startOver) {
        speechSynthesis.speak(msg)
    }

}

function setVoice() {
    msg.voice = voices.find(voice => voice.name == this.value)
    toggle()
}
function setOption() {
    Console.log(this)
    msg[this.name] = this.value
}
speechSynthesis.addEventListener('voiceschanged', populateVoice)
speakButton.addEventListener('click', toggle)
stopButton.addEventListener('click', () => toggle(false))
voiceDropdown.addEventListener('change', setVoice)
options.forEach(option => option.addEventListener('change', setOption))