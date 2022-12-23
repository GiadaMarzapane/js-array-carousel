const myImgs = [
'img/01.webp',
'img/02.webp',
'img/03.webp',
'img/04.webp',
'img/05.webp'];
console.log(myImgs);

const myContainerCarousel = document.querySelector('.carousel');

for (let index = 0; index < myImgs.length; index++) {
    console.log(index);

    const imgCurrent = myContainerCarousel.innerHTML += `<div class="slide">
                                                            <img src="${myImgs[index]}"=>
                                                        </div>`;
    console.log(imgCurrent);
    
    const allSlides = document.querySelectorAll('.slide');

    allSlides[0].classList.add("block");
    
}