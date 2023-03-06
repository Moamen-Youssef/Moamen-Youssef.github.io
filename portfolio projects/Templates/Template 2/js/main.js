//landing section .......................................

//variables
const burgerIcon = document.querySelector('.burger-icon') ;
const navBar = document.querySelector('nav') ;
const navElements = document.querySelectorAll('ul a') ;
const landingImgs = document.querySelector('.landing-cover').children ;
const settingContainer = document.querySelector('.setting-cont') ;
const settingIcon = document.querySelector('.setting-cont i') ;
const colors = document.querySelectorAll('.colors span') ;
const backGroundButtons = document.querySelectorAll('.backgrounds button') ;
const bulletsButtons = document.querySelectorAll('.show-bullets button') ;
const bullets = document.querySelector('.bullets') ;
const resetBtn = document.querySelector('.reset-btn') ;

//automatic image sliding 
let activeImage  ;
const autoSliding = ()=>{
    //get the active image
    for(image of landingImgs){
        if(image.classList.contains('active')){
            activeImage = image ;
        }
    }
    //move to next image if there is not back to first one
    if(activeImage.nextElementSibling !== null){
        activeImage.classList.remove('active') ;
        activeImage.nextElementSibling.classList.add('active') ;
    }else{
        activeImage.classList.remove('active') ;
        landingImgs[0].classList.add('active') ;
    }

}
let  randomBack = setInterval(autoSliding,10000) ;
//END

//local storage variables
//color value
let mainColor = window.localStorage.getItem('main-color');
document.body.style.setProperty('--main-color' ,mainColor) ;
colors.forEach((c)=>{
    if(c.attributes.color.value == mainColor){
        colors.forEach(color=>{color.classList.remove('active')}) ;
        c.classList.add('active')}
})

//bullets
let bulletsChoose = window.localStorage.getItem('bullets') ;
if(bulletsChoose == 'No'){
    bullets.classList.add('inactive');
    bulletsButtons.forEach((btn)=>{btn.classList.remove('active')})
    bulletsButtons[1].classList.add('active') ;
}

//random background 
let backgroundChoose  = window.localStorage.getItem('background') ;
if(backgroundChoose == 'No'){
    backGroundButtons.forEach((btn)=>{btn.classList.remove('active')})
    backGroundButtons[1].classList.add('active') ;
    clearInterval(randomBack) ;
}

//functions 

//setting toggling
let settings = [settingContainer , settingIcon]
const settingActivation = ()=>{
    settings.forEach((item)=>{
        item.classList.toggle('active')
    })
}
let activeMainColor = document.body.style.getPropertyValue('--main-color') ;
const changeColor = (e)=>{
    //remove active class from all colrs
    colors.forEach((c)=>{c.classList.remove('active')})
    //add active class to the clicked color
    e.target.classList.add('active') ;
    // get the active color code and applay it to all elemnts
    document.body.style.removeProperty('--main-color');
    activeMainColor = e.target.attributes.color.value ;
    //push the choosen color to local storage
    window.localStorage.setItem('main-color' , activeMainColor)
    document.body.style.setProperty('--main-color' , activeMainColor) ;  
}

//active buttons
 function btnsActivation(arr) {
        arr.forEach((item)=>{item.classList.remove('active')})
}

//bullets exicistace
const showBullets = (e)=>{
    btnsActivation(bulletsButtons) ;
    e.target.classList.add('active') ;
    window.localStorage.setItem('bullets' , e.target.innerHTML) ;
    bulletsChoose = e.target.innerHTML ;
    if(e.target.innerHTML == 'No'){
        bullets.classList.add('inactive') ;
    }else{
        bullets.classList.remove('inactive') ;
    }
}

//random back ground 
const randomBackGround = (e)=>{
    btnsActivation(backGroundButtons) ;
    e.target.classList.add('active') ;
    window.localStorage.setItem('background' , e.target.innerHTML) ;
    backgroundChoose = e.target.innerHTML ;
    if(e.target.innerHTML == 'No'){ // if user click on No
        clearInterval(randomBack) ;
    }else{// if user accept random backgrounds show
       randomBack = setInterval(autoSliding,10000) ;
    }
}

//reset setting and back to  default 

const reset = ()=>{
    colors[0].classList.add('active') ;
    window.localStorage.clear();
    document.location.reload() ;
}
// events 

//toggle the burger icon on click 
burgerIcon.addEventListener('click' , ()=>{
    navBar.classList.toggle('sm-screen')
})

//remove the nav container on scrolling
window.addEventListener('scroll' , ()=>{
    burgerIcon.classList.remove('sm-screen')
})
//remove the nav container on resizing
window.addEventListener('resize' , ()=>{
    navBar.classList.remove('sm-screen') ;
})

//remove the nav elements after clicking any of them
navElements.forEach(
    (a)=>{
        a.addEventListener('click' , ()=>{
            navBar.classList.remove('sm-screen')  ;
        })
 }
)

// toggle the setting section on click 
settingIcon.addEventListener('click' , settingActivation) ;

// color changing on click
colors.forEach((color)=>{
    //iterate over all colors
    color.addEventListener('click' , changeColor)
})

//buttons changing
//random background
backGroundButtons.forEach((btn)=>{
    btn.addEventListener('click' ,randomBackGround)
})
//bullets 
bulletsButtons.forEach(btn=>{
    btn.addEventListener('click' , showBullets)
})

//reset button 
resetBtn.addEventListener('click' , reset) ;
//End landing section .....................

//start gallery section .....................
const galleryImgs = document.getElementById('gallery').querySelectorAll('.box img') ;
const imageBox = document.querySelector('.image-container') ;
const closeImage = document.querySelector('.image-container .close-me') ;
let imagesArr = [...galleryImgs] ;

//show clicked image in box and show its Array number

const closeMe = ()=>{
    imageBox.lastElementChild.remove();
    imageBox.lastChild.remove()
    imageBox.style.display = 'none' ;
    document.body.firstElementChild.classList.remove('img-overlay') ;
}
//event listeners
//show image
galleryImgs.forEach((img)=>{
    img.addEventListener('click' , ()=>{
        let image = document.createElement("img");
        let text = document.createElement('h5') ;
        text.textContent = `image ${imagesArr.indexOf(img)+1}` ;
        image.setAttribute("src" ,img.attributes.src.value) ;
        imageBox.appendChild(text) ;
        imageBox.appendChild(image) ;
        imageBox.style.display = 'block' ;
        document.body.firstElementChild.classList.add('img-overlay') ;
    })
})
// close image
closeImage.addEventListener('click' , closeMe)

//End gallery section .....................
