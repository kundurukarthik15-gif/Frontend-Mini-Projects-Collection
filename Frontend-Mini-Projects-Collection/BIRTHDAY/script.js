// Smooth Scroll
function scrollToSection(selector) {
  const element = document.querySelector(selector)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

// Modal Functions
function openModal(element) {
  const img = element.querySelector("img")
  const caption = element.querySelector("p")
  const modal = document.getElementById("modal")
  const modalImg = document.getElementById("modal-image")
  const modalCaption = document.getElementById("modal-caption")

  if (modal) {
    modal.style.display = "block"
    modalImg.src = img.src
    modalCaption.textContent = caption ? caption.textContent : "Beautiful Memory"
  }
}

function closeModal() {
  const modal = document.getElementById("modal")
  if (modal) {
    modal.style.display = "none"
  }
}

// Music Toggle
const musicBtn = document.getElementById("music-toggle")
const backgroundMusic = document.getElementById("background-music")
let isMusicPlaying = false

if (musicBtn && backgroundMusic) {
  musicBtn.addEventListener("click", () => {
    if (isMusicPlaying) {
      backgroundMusic.pause()
      musicBtn.textContent = "🔊"
      isMusicPlaying = false
    } else {
      backgroundMusic.play()
      musicBtn.textContent = "🔇"
      isMusicPlaying = true
    }
  })
}

// Confetti Animation
function createConfetti() {
  const confettiContainer = document.querySelector(".confetti")
  if (!confettiContainer) return

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div")
    confetti.style.position = "absolute"
    confetti.style.width = "10px"
    confetti.style.height = "10px"
    confetti.style.background = ["#ff69b4", "#a8e6cf", "#ffc0e8", "#ffd700"][Math.floor(Math.random() * 4)]
    confetti.style.left = Math.random() * 100 + "%"
    confetti.style.top = -10 + "px"
    confetti.style.borderRadius = "50%"
    confetti.style.pointerEvents = "none"
    confetti.style.animation = `fall ${2 + Math.random() * 2}s linear forwards`
    confettiContainer.appendChild(confetti)
  }
}

// Add Confetti Animation
const style = document.createElement("style")
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`
document.head.appendChild(style)

// Balloons
function createBalloons() {
  const balloonsContainer = document.querySelector(".balloons")
  if (!balloonsContainer) return

  for (let i = 0; i < 5; i++) {
    const balloon = document.createElement("div")
    balloon.style.position = "absolute"
    balloon.style.width = "30px"
    balloon.style.height = "40px"
    balloon.style.background = ["#ff69b4", "#a8e6cf", "#ffc0e8", "#87ceeb"][Math.floor(Math.random() * 4)]
    balloon.style.borderRadius = "50% 50% 50% 0"
    balloon.style.left = Math.random() * 100 + "%"
    balloon.style.top = 100 + "vh"
    balloon.style.animation = `float ${5 + Math.random() * 3}s ease-in-out infinite`
    balloon.style.pointerEvents = "none"
    balloonsContainer.appendChild(balloon)
  }
}

// Floating Hearts
function createFloatingHearts() {
  const container = document.querySelector(".floating-hearts")
  if (!container) return

  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div")
    heart.textContent = "💖"
    heart.style.position = "absolute"
    heart.style.left = Math.random() * 100 + "%"
    heart.style.top = -50 + "px"
    heart.style.fontSize = 20 + Math.random() * 30 + "px"
    heart.style.pointerEvents = "none"
    heart.style.animation = `float ${3 + Math.random() * 3}s ease-in forwards`
    heart.style.opacity = Math.random()
    container.appendChild(heart)
  }
}

// Surprise Animation
function openSurprise() {
  const cake = document.getElementById("cake")
  if (cake) {
    cake.classList.remove("hidden")

    createConfetti()
    createFloatingHearts()

    // Add particles burst effect
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement("div")
      particle.style.position = "fixed"
      particle.style.left = "50vw"
      particle.style.top = "50vh"
      particle.style.width = "15px"
      particle.style.height = "15px"
      particle.style.pointerEvents = "none"
      particle.style.zIndex = "999"
      particle.textContent = ["🎊", "✨", "🎉"][Math.floor(Math.random() * 3)]
      particle.style.fontSize = "20px"
      document.body.appendChild(particle)

      const angle = (i / 30) * Math.PI * 2
      const velocity = 5 + Math.random() * 3
      let x = 0,
        y = 0

      const animate = setInterval(() => {
        x += Math.cos(angle) * velocity
        y += Math.sin(angle) * velocity + 0.2
        particle.style.transform = `translate(${x}px, ${y}px)`
        particle.style.opacity = Math.max(0, 1 - Math.abs(y) / 300)

        if (Math.abs(y) > 300) clearInterval(animate)
        if (Math.abs(x) > 300) clearInterval(animate)
      }, 20)
    }
  }
}

// Scroll Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 1s ease forwards"
    }
  })
}, observerOptions)

document.querySelectorAll(".memory-card, .gallery-item, .timeline-item, .card").forEach((el) => {
  observer.observe(el)
})

// Close modal on escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal()
  }
})

// Initialize animations on page load
window.addEventListener("load", () => {
  createBalloons()
  createConfetti()
})

// Navigation Function
function goToPage(page) {
  window.location.href = page
}
