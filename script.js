let p  = document.querySelector('#p')
let imagensBanner = [
  './img/20230808_203107.jpg',
  './img/20230808_212505.jpg',
  './img/20230814_173827.jpg'
]
let bannerImage = document.querySelector('.banner img')
let currentImageIndex = 0

let timer = setInterval(nextImage, 3000)

function nextImage(){
  currentImageIndex ++
  if (currentImageIndex == 3) {currentImageIndex = 0}
  bannerImage.setAttribute('src', imagensBanner[currentImageIndex])
  console.log(currentImageIndex)
}

function ocultarP(){
  console.log('oculparP')
  p.setAttribute('display','none')
}

document.addEventListener('click', nextImage)