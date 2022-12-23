const myImgs = [
'img/01.webp',
'img/02.webp',
'img/03.webp',
'img/04.webp',
'img/05.webp'];
console.log(myImgs);

const myContainerCarousel = document.querySelector('.slide');

for (let index = 0; index < myImgs.length; index++) {
    console.log(myImgs[index]);

    const img = myContainerCarousel.innerHTML += `<img src="${myImgs[index]}"=>`;
    
    if (myImgs[index] == 0) {
        img.classList.add = ('block');
    }
    else{
        img.classList.add = ('hidden');
    }
}