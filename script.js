// ------------------------------------ FUNÇÕES DO BANNER
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
function voltar(){
  window.scrollTo(0,0)
}


//---------------------------- CONTAINER PULSEIRAS
let pulseirasImg = [
  'floral 01 (1).jpg',
  'floral 01 (2).jpg',
  'floral 01 (3).jpg',
  'floral 01 (4).jpg',
  'floral 01 (5).jpg',
  'floral 01 (6).jpg'
]
let pulseirasContainer = document.querySelector('.pulseiras')
pulseirasImg.map((el)=>{
  let newImg = document.createElement('img')
  newImg.src = './img/pulseiras/' + el
  newImg.classList = 'container-img'
  pulseirasContainer.appendChild(newImg)
})

let newVoltar = document.createElement('p')
newVoltar.innerHTML='Voltar'
newVoltar.classList = 'btn-voltar'
newVoltar.addEventListener('click', voltar)
pulseirasContainer.appendChild(newVoltar)
