// ------------------------------------ FUNÇÕES DO header
let headerContent = document.querySelector('#bemvindo')

// ------------------------------  funções do modal 
// modal modal-img  modal-p modal-close
let modal = document.getElementById('modal')
let modalImg = document.getElementById('modal-img')
let modalP = document.getElementById('modal-p')
let modalClose = document.getElementById('modal-close')
modal.style.opacity=0;
modal.style.zIndex=-100;
modalImg.setAttribute('src','')
modalP.innerText='Paragrafou'
modalClose.addEventListener('click',()=>{
  modal.style.opacity=0;
  modal.style.zIndex=-200;
})
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
  headerContent.style.backgroundImage = imagensBanner[currentImageIndex]
  console.log(headerContent)
}
function voltar(){
  window.scrollTo(0,0)
}


//---------------------------- CONTAINER PULSEIRAS
let pulseirasObj = [
  ['floral11.jpg',5],
  ['floral12.jpg',5],
  ['floral13.jpg',4],
  ['floral14.jpg',5],
  ['floral15.jpg',6],
  ['floral16.jpg',5]
]
console.log(pulseirasObj)
let pulseirasContainer = document.querySelector('.pulseiras')
for(let i=0; i<5; i++){
  let newDiv = document.createElement('div')
  pulseirasContainer.appendChild(newDiv)
  newDiv.classList = 'container-div'
  let newImg = document.createElement('img')
  newImg.src = './img/pulseiras/' + pulseirasObj[i][0]
  newImg.classList = 'container-img'
  newDiv.appendChild(newImg)
  let newP = document.createElement('p')
  newP.innerHTML = 'R$ ' + pulseirasObj[i][1] + ',00'
  newP.classList = 'container-p'
  // console.log(puls)
  newDiv.appendChild(newP)
  newDiv.addEventListener('mouseenter',()=>{
    newP.style.bottom = 0
  })
  newDiv.addEventListener('mouseleave',()=>{
    newP.style.bottom = '-30px';
  })
  newDiv.addEventListener('click',()=>{
    modal.style.opacity=1;
    modal.style.zIndex=200;
    modalImg.setAttribute('src',newImg.src)
    modalP.innerText = newP.innerText
  })
}


