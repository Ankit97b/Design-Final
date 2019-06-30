var slideIndex=0;
var slides=document.getElementsByClassName('design-left-image');

const showSlide=() => {
for(var i=0;i<slides.length;i++)
{
    slides[i].style.display='none';
}
  slideIndex++;
  if(slideIndex>slides.length)
  {
      slideIndex=1;
  }
  slides[slideIndex-1].style.display='block';
  setTimeout(showSlide,2000);

}
showSlide();