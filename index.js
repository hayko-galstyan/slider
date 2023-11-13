const mainPhoto = document.getElementById('main-photo')
const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')
const timeline = document.getElementById('timeline')

const photos = [
    'images/Rectangle2.png',
    'images/Rectangle3.png',
    'images/Rectangle4.png',
    'images/shop.png'
]

let currentIndex = 0
updateScreen()

const nextPhoto = () => {
    currentIndex++
    if(currentIndex==photos.length){
        currentIndex = 0
    }
    updateScreen()
}

const prevPhoto = () => {
    currentIndex--
    if(currentIndex < 0) {
        currentIndex = photos.length-1
    }
    updateScreen()
}

function creatTimeline() {
    timeline.innerText = ''
    photos.forEach((elm,index)=>{
        let img = document.createElement("img")
        if(index === currentIndex){
            img.classList.add('active-photo')
        }
        img.src = elm
        timeline.append(img)
    })
}

function updateScreen() {
    mainPhoto.src = photos[currentIndex]
    creatTimeline()
}

nextBtn.onclick = nextPhoto
prevBtn.onclick = prevPhoto