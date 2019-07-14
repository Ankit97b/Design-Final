const carouselContainerLeft = document.querySelector('.carousel-container-left');
const carouselImagesLeft = document.querySelectorAll('.carousel-container-left img');

const prevLeft = document.querySelector('#arrow-left-community');
const nextLeft = document.querySelector('#arrow-right-community');

let counterLeft = 1;
const sizeLeft = carouselImagesLeft[0].clientWidth;

carouselContainerLeft.style.transform = 'translateX(' +(-sizeLeft *counterLeft) +'px)';

nextLeft.addEventListener('click', ()=>{
    if(counterLeft >= carouselImagesLeft.length -1) return;
carouselContainerLeft.style.transition = "transform 0.4s ease-in-out";
counterLeft++;

carouselContainerLeft.style.transform = 'translateX(' +(-sizeLeft *counterLeft) +'px)';


});


prevLeft.addEventListener('click', ()=>{
    if(counterLeft <= 0)
    return;
    carouselContainerLeft.style.transition = "transform 0.4s ease-in-out";
    counterLeft--;
    
    carouselContainerLeft.style.transform = 'translateX(' +(-sizeLeft *counterLeft) +'px)';
    
    
    });

    carouselContainerLeft.addEventListener('transitionend',() =>{
    if(carouselImagesLeft[counterLeft].id ==='lastCommunity')
    {
        carouselContainerLeft.style.transition = 'none';
        counterLeft = carouselImagesLeft.length -2;
        carouselContainerLeft.style.transform = 'translateX(' +(-sizeLeft *counterLeft) +'px)';

    }
    if(carouselImagesLeft[counterLeft].id ==='firstCommunity')
    {
        carouselContainerLeft.style.transition = 'none';
        counterLeft = carouselImagesLeft.length -counterLeft;
        carouselContainerLeft.style.transform = 'translateX(' +(-sizeLeft *counterLeft) +'px)';

    }
    });