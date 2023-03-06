//heading section
const navBar = document.getElementsByTagName('nav')[0];
const burgerIcon = document.getElementsByClassName('fa-bars-holder')[0] ;
const navUl = document.getElementsByTagName('ul')[0] ;

//landing section
const welcome = document.getElementsByClassName('welcome')[0] ;
const leftArrow  = document.getElementsByClassName('left-arrow')[0];
const rightArrow  = document.getElementsByClassName('right-arrow')[0];
const circles  = document.getElementsByClassName('circles')[0];


//automatic slider 
let sensor ;
setInterval(()=>{
    if(sensor == undefined){
        moveToTheNextQoute() ;
    }
    }, 5000)

   set = setInterval(()=>{
sensor = undefined ;
console.log('im here ya mo8afal')
        }, 5000)
//end

//show nav bar items when burger icon clicked
showNav = ()=>{
    navBar.classList.toggle('md-s-screens') ;
}

//remove the nav bar after selecting any section to go to 
removeNavUl = ()=>{
    navBar.classList.remove('md-s-screens') ;
}



//qoutes slider general function
//specify the active qoute
let target = welcome.children[0];
let activeCircle = circles.children[0];

getTheTarget = ()=>{

    for(elem of welcome.children){
        if(elem.className == 'welcome-text active'){
            target =  elem ;
        }
    }
    
    for(elem of circles.children){
        if(elem.className == 'active'){
            activeCircle =  elem ;
        }
    }

    target.classList.remove('active');
    activeCircle.classList.remove('active') ;
}
//end

//right arrow click  
moveToTheNextQoute = ()=>{

getTheTarget() ;

if(target.nextElementSibling == null){
    welcome.children[0].classList.add('active') ;
    circles.children[0].classList.add('active') ;
}else{
    target.nextElementSibling.classList.add('active');
    activeCircle.nextElementSibling.classList.add('active') ;
}

}

//left arrow click
moveToThePreviousQoute = ()=>{
    getTheTarget() ;
    
    if(target.previousElementSibling == null){
        welcome.children[2].classList.add('active') ;
        circles.children[2].classList.add('active') ;
    }else{
        target.previousElementSibling.classList.add('active');
        activeCircle.previousElementSibling.classList.add('active') ;
    }
    }

// event listners

window.addEventListener("resize" , ()=>{
    navBar.classList.remove('md-s-screens') ;
})

burgerIcon.addEventListener('click' , showNav) ;

navUl.addEventListener('click' , removeNavUl) ;
rightArrow.addEventListener('click' , (e)=>{
    moveToTheNextQoute() ;
    sensor = e.type ;
    set ;
})

leftArrow.addEventListener('click' , (e)=>{
    moveToThePreviousQoute() ;
    sensor = e.type ;
})

//Portfolio Section


const portfolioImgsContainer = document.getElementsByClassName('photos-cont')[0]  ;
const portfolioImgs = portfolioImgsContainer.getElementsByTagName('img') ; 

const hoverOnImg = (e)=>{

    if(e.target.localName == 'img'){
        //targeted image
        for(item of portfolioImgs){
            item.classList.remove("active")
        }
        e.target.classList.add("active")
    }
    }

portfolioImgsContainer.addEventListener("mouseover", hoverOnImg)

portfolioImgsContainer.addEventListener("mouseleave",
     ()=>{
        for(item of portfolioImgs){
            item.classList.remove("active")
        }
    })


    //about us section 
    const employee = document.getElementsByClassName('employee') ;
    const smallCircles  = document.getElementsByClassName('small-circles')[0];
    let activeEmp = employee[0]  ;
    let activeSmallCircle = smallCircles.children[0] ;


    setInterval(()=>{
        //get the active employee
        for(emp of employee){
            if(emp.classList.contains('active')){
               activeEmp = emp ;
            }}
            //get the active circle
            for(elem of smallCircles.children){
                if(elem.className == 'active'){
                    activeSmallCircle =  elem ;
                }}

                //auto sliding 
            if(activeEmp.nextElementSibling.classList.contains('small-circles')) {
                activeEmp.classList.remove('active') ;
                employee[0].classList.add('active') ; 

                activeSmallCircle.classList.remove('active') ;
                smallCircles.children[0].classList.add('active') ; 
                } else{
                    activeEmp.classList.remove('active') ;
                    activeEmp.nextElementSibling.classList.add('active') ;

                    activeSmallCircle.classList.remove('active') ;
                    activeSmallCircle.nextElementSibling.classList.add('active') ;
                }
    } , 9000)


