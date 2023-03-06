// START MAIN SECTION

//variables
const navBar = document.querySelector('header nav ul');
const burgerIcon = document.querySelector('.burger-icon');
const closeIcon = burgerIcon.nextElementSibling;
const navElms = document.querySelectorAll('header nav ul a');
const header = document.getElementsByTagName('header')[0];
const myJob = document.querySelector('.auto-type');
const myImg = document.querySelector('#main img');
//############################################################

//functions
// delay the typing of my job text 
let myJobText = 'Front-End Web Developer';
let counter = 100;
const autoType = () => {
    for (let i = 0; i < myJobText.length; i++) {
        setTimeout(() => {
            myJob.append(`${myJobText[i]}`);
            if (myJob.textContent == myJobText) {
                myJob.nextElementSibling.remove()
            }
        }, counter)
        counter += 100;
    }
}

const burgerIconClick = () => {
    //toggling nav bar on click
    navBar.classList.add('active');
    //show close icon
    closeIcon.classList.add('active');
    closeIcon.classList.remove('transition-faster');
    //hide the burger icon
    burgerIcon.style.cssText = 'position:absolute ; right: 0 ;top:-50px ; opacity:0';
    // show header 
    header.classList.add('active');

    let postion = 35;
    let time = 200;
    // loop on nav elements
    for (let i = 0; i < navElms.length; i++) {
        //animated show for the elements
        setTimeout(() => {
            navElms[i].style.cssText = `top:${postion}px`;
            postion += 35;
        }, time);
        time += 200;
        //remove the transition delay to make hovering easier
        setTimeout(() => {
            navElms[i].style.transition = '0s'
        }, 2000)
    }
}

const closeIconClick = () => {
    navBar.classList.remove('active');
    header.classList.remove('active');
    closeIcon.classList.remove('active');
    closeIcon.classList.add('transition-faster');
    burgerIcon.style.cssText = 'position:unset ; opacity:1';
    if (header.style.backgroundColor == 'white') {
        burgerIcon.style.color = 'black';
    }

}

const appearOnScrollY = () => {
    header.style.backgroundColor = 'white';
    burgerIcon.style.color = 'black';
}

const onScroll = () => {

    if (scrollY > 0 && document.defaultView.getComputedStyle(burgerIcon).display == 'block') {
        appearOnScrollY();
    }
    if (scrollY > 0) {
        header.appendChild(myImg);
        myImg.classList.add('on-scroll');
    }
    if (scrollY == 0) {
        burgerIcon.style.color = 'white';
        header.style.backgroundColor = '';
        if (header.lastElementChild == myImg) {
            header.lastElementChild.remove();
            document.querySelector('#main').appendChild(myImg);
            myImg.classList.remove('on-scroll')
        }
    }



}


//#############################################################

//Events 
myImg.addEventListener('click', ()=>{
    window.scrollTo(0,0);
})
document.addEventListener("DOMContentLoaded", autoType);
window.addEventListener('resize', () => {
    closeIconClick();
    if (document.defaultView.getComputedStyle(burgerIcon).display == 'none') {
        header.style.backgroundColor = '';
        document.querySelector('#main').appendChild(myImg);
    }
})
//add styles on scrolling 
window.addEventListener('scroll', onScroll);
// burger icon click
burgerIcon.addEventListener('click', burgerIconClick);
//close icon click
closeIcon.addEventListener('click', closeIconClick);

//###########################################################
// END HEADING SECTION

//START SKILLS SECTION 
const sections = document.querySelectorAll('section');
const skillsSection = document.querySelector('#skills');
const skillsSpan = document.querySelectorAll('.skills-cont div span')
const skillsPosition = skillsSection.offsetTop - 150; // area above the section
const skillsHeight = skillsSection.clientHeight; // section height
const endHeight = skillsHeight + skillsPosition


//functions 

const sectionInview = () => {

    if (skillsPosition < window.scrollY && window.scrollY <= endHeight) {
    }

    sections.forEach(
        section => {
            const sectionPosition = section.offsetTop - 150; // area above the section
            const sectionHeight = section.clientHeight; // section height
            const endHeight = sectionHeight + sectionPosition;
            if (sectionPosition < window.scrollY && window.scrollY <= endHeight) {
                navElms.forEach(
                    elem => {
                        elem.style.color = 'white';
                        if (elem.attributes.href.value == `#${section.id}`) {
                            elem.style.color = 'black';
                        }
                        if (section.id == 'skills') {
                            skillsSpan.forEach(skill => {
                                skill.style.width = skill.attributes.width.value;
                            })
                        }
                    }
                )
            }
        }
    )

}
//Events 
window.addEventListener(('scroll'), sectionInview)

//END SKILLS SECTION 





//PORTFOLIO SECTION
const portfolioSection = document.querySelector('#portfolio')
const projectCards = document.querySelectorAll('#portfolio .projects .project-card');


//function to remove and add same classes to multiple elements 
const removeAddClasses = (args, method, className) => {
    //put args in n array
    args.forEach(arg => {
        if (method == 'add') {
            arg.classList.add(className)
        } else {
            arg.classList.remove(className)

        }
    })

}
portfolioSection.addEventListener('mouseover', (e) => {

    // elements to add to it the same class on hover  

    projectCards.forEach(card => {
        let projectName = card.querySelector('.project-name');
        let projectNameText = projectName.querySelector('h3');
        let args = [card, projectName, projectNameText]
        if (card == e.target.parentElement || e.target.nodeName == 'H3') {


            removeAddClasses(args, 'add', 'appear')
        } else {
            removeAddClasses(args, 'remove', 'appear')
        }
    })


})

//END PORTFOLIO SECTION