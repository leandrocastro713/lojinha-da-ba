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
}
function voltar(){
  window.scrollTo(0,0)
}


//---------------------------- CONTAINER PULSEIRAS
let pulseirasImg = [
  'floral011.jpg',
  'floral012.jpg',
  'floral013.jpg',
  'floral014.jpg',
  'floral015.jpg',
  'floral016.jpg'
]
let pulseirasContainer = document.querySelector('.pulseiras')
pulseirasImg.map((el)=>{
  let newImg = document.createElement('img')
  newImg.src = './img/pulseiras/' + el
  newImg.classList = 'container-img'
  pulseirasContainer.appendChild(newImg)
})

let newVoltar1 = document.createElement('p')
newVoltar1.innerHTML='Voltar'
newVoltar1.classList = 'btn-voltar'
newVoltar1.addEventListener('click', voltar)
pulseirasContainer.appendChild(newVoltar1)


let aneisContainer = document.querySelector('.aneis')
pulseirasImg.map((el)=>{
  let newImg = document.createElement('img')
  newImg.src = './img/aneis/' + el
  newImg.classList = 'container-img'
  aneisContainer.appendChild(newImg)
})

let newVoltar2 = document.createElement('p')
newVoltar2.innerHTML='Voltar'
newVoltar2.classList = 'btn-voltar'
newVoltar2.addEventListener('click', voltar)
aneisContainer.appendChild(newVoltar2)
