///////nav toggle///////
const toggle = document.querySelector('.toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
    
})


//////////PopUP video////////

const aboutRight = document.querySelector('.about__right');
const popUp = document.querySelector('.popUp_video');
const popUpContent = document.querySelector('#popUp_content');

const popUPHandler =() =>{
    popUp.classList.add('active');
}

///////show popUp//////
aboutRight.addEventListener('click', () => popUPHandler());


//////hide popUp//////
popUp.addEventListener('click', () => {
    popUp.classList.remove('active');
})

const topArrow = document.querySelector('.top_arrow');
const bottomArrow = document.querySelector('.bottom_arrow');
const number = document.querySelector('.number');

///////Guest selection/////
let lenth = 1;
number.innerHTML = lenth;
const increment = () => {
   lenth++;
    number.innerHTML = lenth;

};
const decrement = () => {
    if(lenth === 1 ){
        return
    }
    else{
        lenth--;
   number.innerHTML = lenth;
    }
};

 topArrow.addEventListener('click' , increment);
bottomArrow.addEventListener('click' , decrement);


