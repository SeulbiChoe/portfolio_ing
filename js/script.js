const mainTxt = document.querySelector('#section-1 h3');
const subTxt = document.querySelector('#section-1 p');

const circle = document.querySelector('#section-1 div');
const arrow = document.querySelector('.arrow');

const section2 = document.querySelector('#section-2');

setTimeout(() => {
    mainTxt.style.transform = 'translateY(100px)';
    mainTxt.style.opacity = 1;
}, 1000);

setTimeout(() => {
    subTxt.style.transform = 'translateY(105px)';
    subTxt.style.opacity = 1;
}, 2000);

setTimeout(() => {
    circle.style.opacity = 1;
    circle.style.marginTop = '120px';
}, 3000);

window.addEventListener('wheel', ()=>{
    section2.style.opacity = 1;
    section2.style.paddingTop = '50px';
});



