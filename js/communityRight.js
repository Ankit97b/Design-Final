const carouselContainerRight = document.querySelector('.carousel-container-right');
const carouselImagesRight = document.querySelectorAll('.carousel-container-right img');

const prevRight = document.querySelector('#arrow-left-community');
const nextRight = document.querySelector('#arrow-right-community');

let counterRight = 1;
const sizeRight = carouselImagesRight[0].clientWidth;

carouselContainerRight.style.transform = 'translateX(' +(-sizeRight *counterRight) +'px)';

nextRight.addEventListener('click', ()=>{
    if(counterRight >= carouselImagesRight.length -1) return;
carouselContainerRight.style.transition = "transform 0.4s ease-in-out";
counterRight++;

carouselContainerRight.style.transform = 'translateX(' +(-sizeRight *counterRight) +'px)';


});


prevRight.addEventListener('click', ()=>{
    if(counterRight <= 0)
    return;
    carouselContainerRight.style.transition = "transform 0.4s ease-in-out";
    counterRight--;
    
    carouselContainerRight.style.transform = 'translateX(' +(-sizeRight *counterRight) +'px)';
    
    
    });
    carouselContainerRight.addEventListener('transitionend',() =>{
    if(carouselImagesRight[counterRight].id ==='lastCommunityRight')
    {
        carouselContainerRight.style.transition = 'none';
        counterRight = carouselImagesRight.length -2;
        carouselContainerRight.style.transform = 'translateX(' +(-sizeRight *counterRight) +'px)';

    }
    if(carouselImagesRight[counterRight].id ==='firstCommunityRight')
    {
        carouselContainerRight.style.transition = 'none';
        counterRight = carouselImagesRight.length -counterRight;
        carouselContainerRight.style.transform = 'translateX(' +(-sizeRight *counterRight) +'px)';

    }
    });