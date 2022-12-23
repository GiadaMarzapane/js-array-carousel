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
    const allSlides = document.querySelectorAll('.slide');

    allSlides[0].classList.add("block");

    let imgBlock = 0;
    
    const next = document.getElementById('next');
    const previous = document.getElementById('previous');

    next.addEventListener('click',
        function () {
                    
            console.log('click su next');
            allSlides[imgBlock].classList.remove("block");            
            imgBlock = imgBlock + 1;
            allSlides[imgBlock].classList.add("block");
            previous.classList.remove("hidden");

            if(imgBlock == allSlides.length - 1){
                next.className = "hidden";
            }
        }
    )


    previous.addEventListener('click',
        function () {

            console.log('click su previous');
            allSlides[imgBlock].classList.remove("block");
            imgBlock = imgBlock - 1;
            allSlides[imgBlock].classList.add("block");
            
            if(imgBlock == 0){
                previous.classList.add("hidden");            
            }

            next.classList.remove("hidden");
    }
    )
}