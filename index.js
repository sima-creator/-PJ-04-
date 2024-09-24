let cardRoom = [{
    url : 'asset/slaider__room-1.jpg',
    cityName : 'Rostov-on-Don<br> LCD admiral',
    apartmentArea : '81 m2',
    repairTime : '3.5 month',
    linkElem : 'Rostov-on-Don, Admiral'
}, {
    url : 'asset/slaider__room-2.jpg',
    cityName : 'Sochi<br> Thieves',
    apartmentArea : '105 m2',
    repairTime : '4 month',
    linkElem : 'Sochi Thieves'
}, {
    url : 'asset/slaider__room-3.jpg',
    cityName : 'Rostov-on-Don<br> Patriotic',
    apartmentArea : '93 m2',
    repairTime : '3 month',
    linkElem : 'Rostov-on-Don Patriotic'
}]

function initSlider(options) {
    if ( !cardRoom || !cardRoom.length ) return;

    options = options || {
        city: true,
        dots: true,
        square: true,
        links: true
    };

    let sliderImages = document.querySelector('.section-page__slider-block_images');
    let sliderControlBar = document.querySelector('.section-page__info-block_slider-control');
    let sliderDots = document.querySelector('.dot-block')
    let cityNameBlock = document.querySelector('.city-name')
    let squareBlock = document.querySelector('.square')
    let timeBlcok = document.querySelector('.time')
    let linksBlock = document.querySelector('.section-page__slider-block_link-block')

    initImages();
    initArrows();

    if (options.dots) {
        initDots();
    };

    if (options.city) {
        initCityName();
    };

    if (options.square) {
        initSquare();
    };

    if (options.time) {
        initTime();
    };

    if (options.links) {
        initLink();
    }

    function initImages() {
        cardRoom.forEach((image, index) =>{
            let imageDiv = `<div class='image n${index} ${index === 0? 'active' : ''}' style='background-image: url(${cardRoom[index].url});' data-index='${index}'></div>`;
            sliderImages.innerHTML += imageDiv;
        })
    }

    function initArrows() {
        sliderControlBar.querySelectorAll('.slider__arrow').forEach(arrow => {
            arrow.addEventListener('click', function () {
                let curNumber = +sliderImages.querySelector('.active').dataset.index;
                let nextNumber;
                if (arrow.classList.contains('left')) {
                    nextNumber = curNumber === 0? cardRoom.length - 1 : curNumber - 1;
                } else {
                    nextNumber = curNumber === cardRoom.length - 1? 0 : curNumber + 1;
                }
                moveSlider(nextNumber);
            })
        });
    }

    function initDots() {
        cardRoom.forEach((image, index) => {
            let dot = `<div class='slider__dot n${index} ${index === 0? 'active' : ''}' data-index = '${index}'></div>`;
            sliderDots.innerHTML += dot;
        });
        sliderDots.querySelectorAll('.slider__dot').forEach(dot => {
            dot.addEventListener('click', function () {
                moveSlider(this.dataset.index);
                sliderDots.querySelector('.active').classList.remove('active');
                this.classList.add('active');
            })
        })
    }

    function initLink() {
        cardRoom.forEach((link, index) => {
            let linkA = `<a href='#' class='slider__link n${index} ${index ===0? 'active' : ''}' data-index='${index}'>${cardRoom[index].linkElem}</a>`;
            linksBlock.innerHTML += linkA;
        });
        linksBlock.querySelectorAll('.slider__link').forEach(linkA => {
            linkA.addEventListener('click', function () {
                moveSlider(this.dataset.index);
                linksBlock.querySelector('.active').classList.remove('active');
                this.classList.add('active');
            })
        })
    }

    function moveSlider(num) {
        sliderImages.querySelector('.active').classList.remove('active');
        sliderImages.querySelector('.n' + num).classList.add('active');
        sliderDots.querySelector('.active').classList.remove('active');
        sliderDots.querySelector('.n' + num).classList.add('active');
        linksBlock.querySelector('.active').classList.remove('active');
        linksBlock.querySelector('.n' + num).classList.add('active')
        if (options.city) changeCityName(num);
    }

    function initCityName() {
        let cityNameDiv = `<div class='slider__description'>${cardRoom[0].cityName}</div>`;
        cityNameBlock.innerHTML += cityNameDiv;
    }

    function initSquare () {
        let squareDiv = `<div class='slider__description'>${cardRoom[0].apartmentArea}</div>`;
        squareBlock.innerHTML += squareDiv;
    }

    function initTime () {
        let timeDiv = `<div class='slider__description'>${cardRoom[0].repairTime}</div>`;
        timeBlcok.innerHTML += timeDiv;
    }



    function changeCityName(num) {
        if (!cardRoom[num].cityName) return;
        let sliderCityName = cityNameBlock.querySelector('.slider__description');
        sliderCityName.innerHTML = cardRoom[num].cityName;

        if (!cardRoom[num].apartmentArea) return;
        let sliderSquare = squareBlock.querySelector('.slider__description');
        sliderSquare.innerHTML = cardRoom[num].apartmentArea;

        if (!cardRoom[num].repairTime) return;
        let sliderTime = timeBlcok.querySelector('.slider__description');
        sliderTime.innerHTML = cardRoom[num].repairTime;
    }
}

let sliderOptions = {
    dots: true,
    city: true,
    square: true,
    time: true,
    links: true 
}

document.addEventListener('DOMContentLoaded', function () {
    initSlider(sliderOptions);
});










// let cardRoom = [{
//     url : 'asset/slaider__room-1.jpg',
//     cityName : 'Rostov-on-Don<br> LCD admiral',
//     apartmentArea : '81 m2',
//     repairTime : '3.5 month',
//     linkElem : 'Rostov-on-Don, Admiral'
// }, {
//     url : 'asset/slaider__room-2.jpg',
//     cityName : 'Sochi<br> Thieves',
//     apartmentArea : '105 m2',
//     repairTime : '4 month',
//     linkElem : 'Sochi Thieves'
// }, {
//     url : 'asset/slaider__room-3.jpg',
//     cityName : 'Rostov-on-Don<br> Patriotic',
//     apartmentArea : '93 m2',
//     repairTime : '3 month',
//     linkElem : 'Rostov-on-Don Patriotic'
// }]

// function initSlider(options) {
//     if ( !cardRoom || !cardRoom.length ) return;

//     options = options || {
//         city: true,
//         dots: true,
//         square: true,
//         links: true
//     };

//     let sliderImages = document.querySelector('.section-page__slider-block_images');
//     let sliderControlBar = document.querySelector('.section-page__info-block_slider-control');
//     let sliderDots = document.querySelector('.dot-block')
//     let cityNameBlock = document.querySelector('.city-name')
//     let squareBlock = document.querySelector('.square')
//     let timeBlcok = document.querySelector('.time')
//     let linksBlock = document.querySelector('.section-page__slider-block_link-block')

//     initImages();
//     initArrows();

//     if (options.dots) {
//         initDots();
//     };

//     if (options.city) {
//         initCityName();
//     };

//     if (options.square) {
//         initSquare();
//     };

//     if (options.time) {
//         initTime();
//     };

//     if (options.links) {
//         initLink();
//     }

//     function initImages() {
//         cardRoom.forEach((image, index) =>{
//             let imageDiv = `<div class='image n${index} ${index === 0? 'active' : ''}' style='background-image: url(${cardRoom[index].url});' data-index='${index}'></div>`;
//             sliderImages.innerHTML += imageDiv;
//         })
//     }

//     function initArrows() {
//         sliderControlBar.querySelectorAll('.slider__arrow').forEach(arrow => {
//             arrow.addEventListener('click', function () {
//                 let curNumber = +sliderImages.querySelector('.active').dataset.index;
//                 let nextNumber;
//                 if (arrow.classList.contains('left')) {
//                     nextNumber = curNumber === 0? cardRoom.length - 1 : curNumber - 1;
//                 } else {
//                     nextNumber = curNumber === cardRoom.length - 1? 0 : curNumber + 1;
//                 }
//                 moveSlider(nextNumber);
//             })
//         });
//     }

//     function initDots() {
//         cardRoom.forEach((image, index) => {
//             let dot = `<div class='slider__dot n${index} ${index === 0? 'active' : ''}' data-index = '${index}'></div>`;
//             sliderDots.innerHTML += dot;
//         });
//         sliderDots.querySelectorAll('.slider__dot').forEach(dot => {
//             dot.addEventListener('click', function () {
//                 moveSlider(this.dataset.index);
//                 sliderDots.querySelector('.active').classList.remove('active');
//                 this.classList.add('active');
//             })
//         })
//     }

//     function initLink() {
//         cardRoom.forEach((link, index) => {
//             let linkA = `<a href='#' class='slider__link n${index} ${index ===0? 'active' : ''}' data-index='${index}'>${cardRoom[index].linkElem}</a>`;
//             linksBlock.innerHTML += linkA;
//         })
//     }

//     function moveSlider(num) {
//         sliderImages.querySelector('.active').classList.remove('active');
//         sliderImages.querySelector('.n' + num).classList.add('active');
//         sliderDots.querySelector('.active').classList.remove('active');
//         sliderDots.querySelector('.n' + num).classList.add('active');
//         linksBlock.querySelector('.active').classList.remove('active');
//         linksBlock.querySelector('.n' + num).classList.add('active')
//         if (options.city) changeCityName(num);
//     }

//     function initCityName() {
//         let cityNameDiv = `<div class='slider__description'>${cardRoom[0].cityName}</div>`;
//         cityNameBlock.innerHTML += cityNameDiv;
//     }

//     function initSquare () {
//         let squareDiv = `<div class='slider__description'>${cardRoom[0].apartmentArea}</div>`;
//         squareBlock.innerHTML += squareDiv;
//     }

//     function initTime () {
//         let timeDiv = `<div class='slider__description'>${cardRoom[0].repairTime}</div>`;
//         timeBlcok.innerHTML += timeDiv;
//     }



//     function changeCityName(num) {
//         if (!cardRoom[num].cityName) return;
//         let sliderCityName = cityNameBlock.querySelector('.slider__description');
//         sliderCityName.innerHTML = cardRoom[num].cityName;

//         if (!cardRoom[num].apartmentArea) return;
//         let sliderSquare = squareBlock.querySelector('.slider__description');
//         sliderSquare.innerHTML = cardRoom[num].apartmentArea;

//         if (!cardRoom[num].repairTime) return;
//         let sliderTime = timeBlcok.querySelector('.slider__description');
//         sliderTime.innerHTML = cardRoom[num].repairTime;
//     }
// }

// let sliderOptions = {
//     dots: true,
//     city: true,
//     square: true,
//     time: true,
//     links: true 
// }

// document.addEventListener('DOMContentLoaded', function () {
//     initSlider(sliderOptions);
// });