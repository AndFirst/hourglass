let position = 0
const dt = 250

const animate = ()=> setInterval(() => {
    position = (position + 100) % 1800
    document.getElementById("image").style.backgroundPositionY =  `-${position}px`
}, dt)

animate()