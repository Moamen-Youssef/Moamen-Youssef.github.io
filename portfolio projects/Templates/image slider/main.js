const images = document.images ;
const nxtBtn = document.getElementsByTagName("button")[1] ;
const preBtn = document.getElementsByTagName('button')[0] ;
const imgBox = document.getElementsByClassName('img-box')[0] ;
const numCont = document.getElementsByClassName('num-cont')[0] ;
let iC = 1 //imageCounter
let imagesArr = [...images]
let r ;


for(let i =2 ; i< imagesArr.length+1 ; i++){
    let newNum = document.createElement('span');
    newNum.textContent = i
    numCont.appendChild(newNum) ;
 }

const preSet = ()=>{
    preBtn.classList.toggle('pre-button') ;
    preBtn.setAttribute('disabled' ,'' ) ;
}

const preBtnRemov = ()=>{
    preBtn.classList.remove('pre-button') ;
    preBtn.removeAttribute('disabled')
}

const activeImg = ()=>{
    for(x of numCont.children) {
        if(Number(x.textContent) == iC){
            x.classList.add('im-here')
        }
        else{ x.classList.remove('im-here')}
    }
}

let done =()=>{
    preSet() ;
    numCont.children[0].classList.add('im-here')
    imgBox.textContent = `#image-slide ${iC}` ;
    imagesArr[0].style.display = 'block' ;
}


window.addEventListener('load' , done)





nxtBtn.addEventListener('click' , ()=>{

        imgBox.textContent = `#image-slide ${iC + 1}`
        iC++
        preBtnRemov() ;

    for(let i =0 ; i<imagesArr.length ;i++){
        if(imagesArr[i].style.display == 'block'){
           r = imagesArr[i]
        }
        console.log(r)
        if(r == imagesArr[imagesArr.length-1]){
            done() ;
            imgBox.textContent = `#image-slide 1`;
            iC =1
           x.classList.remove('im-here')
           imagesArr[imagesArr.length-1].style.display = 'none' ;
        }
    }

r.nextElementSibling.style.display = 'block'
r.style.display = 'none'

activeImg();
})

preBtn.addEventListener('click' , (e)=>{

       imgBox.textContent = `#image-slide ${iC - 1}`
       iC--

       for(let i =0 ; i<imagesArr.length ;i++){
           if(imagesArr[i].style.display == 'block'){
              r= imagesArr[i]
            }
       }

   r.previousElementSibling.style.display = 'block'
   r.style.display = 'none'

   if(images[0].style.display == 'block'){
preSet() ;
}
activeImg() ;  
})


numCont.addEventListener('click', (e)=>{

    if(e.target.textContent == '1'){
preSet() ;
    }
    else{preBtnRemov()}

    for(let i = 0 ; i < imagesArr.length +1 ; i++){
        imagesArr[Number(e.target.textContent) -1].style.display = 'block' ;
        imagesArr[i].style.display = 'none' ;
        e.target.classList.add('im-here')
        iC = Number(e.target.textContent)
        imgBox.textContent = `#image-slide ${iC}`

        for(x of numCont.children){
            if(x !== e.target)
            {x.classList.remove('im-here')}
        }
    }
})

