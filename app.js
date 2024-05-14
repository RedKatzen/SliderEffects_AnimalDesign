let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carroselDom = document.querySelector('.carrosel');
let listaItemDom = document.querySelector('.carrosel .lista');
let thumbnailDom = document.querySelector('.carrosel .thumbnail');


nextDom.onclick = function() {
    mostrarSlider('next');
}
prevDom.onclick = function() {
    mostrarSlider('prev');
}

let timeRunning = 3000;
let timeAutoNext = 5000;

let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext);

function mostrarSlider(tipo){
    let itemSlider = document.querySelectorAll('.carrosel .lista .item');
    let itemThumbnail = document.querySelectorAll('.carrosel .thumbnail .item');

    if(tipo === 'next' ){
        listaItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carroselDom.classList.add('next');
    }else{
        let ultimoItem = itemSlider.length - 1;
        listaItemDom.prepend(itemSlider[ultimoItem]);
        thumbnailDom.prepend(itemThumbnail[ultimoItem]);
        carroselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}