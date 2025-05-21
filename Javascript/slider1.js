/*         <!---------------- Variables & Initialization ---------------->  */
const rail   = document.querySelector('.slider-rail')
const handle = rail.querySelector('.slider-dot')
const bubble = rail.querySelector('.bubble-text')
const nextBtn = document.getElementById('nextBtn')
let dragging = false
let hasInteracted = false

let sliderValue = 0
updateBubble(sliderValue)

nextBtn.style.opacity = '0'
nextBtn.style.visibility = 'hidden'
nextBtn.style.pointerEvents = 'none'

/*         <!---------------- Event Listeners - Touch & Mouse Down ---------------->  */
handle.addEventListener('mousedown', () => {
  dragging = true
  handle.classList.add('active')
})

handle.addEventListener('touchstart', (e) => {
  dragging = true
  handle.classList.add('active')
  e.preventDefault()
})

/*         <!---------------- Event Listeners - Touch & Mouse Up ---------------->  */
document.addEventListener('mouseup', () => {
  if (dragging) {
    dragging = false
    handle.classList.remove('active')
    
    if (hasInteracted || sliderValue > 0) {
      showNextButton()
    }
  }
})

document.addEventListener('touchend', () => {
  if (dragging) {
    dragging = false
    handle.classList.remove('active')
    
    if (hasInteracted || sliderValue > 0) {
      showNextButton()
    }
  }
})

/*         <!---------------- Slider Position  ---------------->  */
function updateSlider(clientX) {
  const railRect = rail.getBoundingClientRect()
  
  let position = clientX - railRect.left
  
  if (position < 0) position = 0
  if (position > railRect.width) position = railRect.width
  
  let percentage = Math.round((position / railRect.width) * 100)
  
  handle.style.left = `${position}px`
  
  sliderValue = percentage
  updateBubble(sliderValue)
  
  hasInteracted = true
}

/*         <!---------------- Event Listeners - Movement ---------------->  */
document.addEventListener('mousemove', (e) => {
  if (!dragging) return
  updateSlider(e.clientX)
})

document.addEventListener('touchmove', (e) => {
  if (!dragging) return
  const touch = e.touches[0]
  updateSlider(touch.clientX)
  e.preventDefault()
})

/*         <!---------------- UI ---------------->  */
function updateBubble(value) {
  bubble.textContent = `${value} %`
}

function showNextButton() {
  nextBtn.style.visibility = 'visible'
  nextBtn.style.pointerEvents = 'auto'
  
  setTimeout(() => {
    nextBtn.style.opacity = '1'
    nextBtn.style.transition = 'opacity 0.5s ease-in-out'
  }, 50)
}

/*         <!---------------- Content Transitions ---------------->  */
document.addEventListener('DOMContentLoaded', function() {
  const illustrationSection = document.querySelector('.Quiz1-illustration')
  const sliderSection = document.querySelector('.slider-section')
  
  illustrationSection.style.opacity = '1'
  illustrationSection.style.visibility = 'visible'
  
  sliderSection.style.opacity = '0'
  sliderSection.style.visibility = 'hidden'
  sliderSection.style.display = 'none'
  
  illustrationSection.style.transition = 'opacity 1s ease-in-out'
  sliderSection.style.transition = 'opacity 1s ease-in-out'
  
  setTimeout(() => {
    illustrationSection.style.opacity = '0'
    
    setTimeout(() => {
      illustrationSection.style.display = 'none'
      illustrationSection.style.visibility = 'hidden'
      
      sliderSection.style.display = 'block'
      sliderSection.style.visibility = 'visible'
      
      setTimeout(() => {
        sliderSection.style.opacity = '1'
      }, 50)
    }, 1000)
  }, 6000)
})

function Redirect() {
    console.log("video stopped")
    window.location.href = "Quiz2.html";
}

function playvideo(){
    const videox = document.getElementById("Videoplay")
    const evry = document.querySelector("main")

    videox.style.display = "block";
    evry.style.display = "none";
    


    videox.muted = false;
    videox.play().then(() => {
      console.log("Video is playing with sound.");
    }).catch((err) => {
      console.warn("Playback failed:", err);
    });
    videox.addEventListener("ended", Redirect);
  }

