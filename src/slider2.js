// let images = [
//     {
//         title: 'Banner1',
//         url: './images/slider/banner1.png'
//     },
//     {
//         title: 'Banner2',
//         url: './images/slider/banner2.png'
//     },
//     {
//         title: 'Banner3',
//         url: './images/slider/banner3.png'
//     }
// ]
//
//
// function initSlider(options) {
//
//     if (!images || !images.length) return;
//
//     options = options || {
//         dots: true,
//         autoplay: true
//     };
//
//     let sliderImages = document.querySelector(".main-block__images");
//     // let sliderArrows = document.querySelector(".main-block__slider");
//     let sliderDots = document.querySelector(".main-block__slider-dots");
//     // let sliderNames = document.querySelector(".citymenu__list");
//
//     // const text = document.querySelector('.name-city');
//     // const areaM2 = document.querySelector('.area-apart');
//     // const repTime = document.querySelector('.repair-time');
//     // const repCost = document.querySelector('.repair-cost');
//
//     initImages();
//     // initArrows();
//     // initNames();
//
//     if (options.dots) {
//         initDots();
//     }
//     // if (options.names) {
//     //     initNames();
//     // }
//     if (options.autoplay) {
//         initAutoplay();
//     }
//
//     function initImages() {
//         images.forEach((image, index) => {
//             let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
//             sliderImages.innerHTML += imageDiv;
//         });
//     }
//
//     // function initArrows() {
//     //     sliderArrows.querySelectorAll(".main-block2__slider-arrow").forEach(arrow => {
//     //         // обработчик клика по стрелке
//     //         arrow.addEventListener("click", function() {
//     //             let curNumber = +sliderImages.querySelector(".active").dataset.index;
//     //             let nextNumber;
//     //             if (arrow.classList.contains("slider-left")) {
//     //                 nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
//     //             } else {
//     //                 nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
//     //             }
//     //             moveSlider(nextNumber);
//     //         });
//     //     });
//     // }
//
//     function initDots() {
//         images.forEach((image, index) => {
//             let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
//             //   добавили точки в этот див sliderDots
//             sliderDots.innerHTML += dot;
//         });
//         // добвляем обработчики событий (клика) на точки
//         sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
//             dot.addEventListener("click", function() {
//                 moveSlider(this.dataset.index);
//             })
//         })
//     }
//
//     // function initNames() {
//     //     images.forEach((image, index) => {
//     //         let cityDiv = `<li class="citymenu__item n${index} ${index === 0? "citymenu__link-active" : ""}" data-index="${index}">${images[index].titles}</li>`;
//     //         sliderNames.innerHTML += cityDiv;
//     //     });
//     //     // добвляем обработчики событий (клика) на названия городов
//     //     sliderNames.querySelectorAll(".citymenu__item").forEach(cityDiv => {
//     //         cityDiv.addEventListener("click", function() {
//     //             moveSlider(this.dataset.index);
//     //         })
//     //     })
//     // }
//
//
//
//     // let setEntity = (num) => {
//     //     // text.innerText = images[num].titles;
//     //     // areaM2.innerText = images[num].area;
//     //     repTime.innerText = images[num].time;
//     //     repCost.innerText = images[num].cost;
//     // }
//
//     function moveSlider(num) {
//         sliderImages.querySelector(".active").classList.remove("active");
//         sliderImages.querySelector(".n" + num).classList.add("active");
//
//         if (options.dots) {
//             sliderDots.querySelector(".active").classList.remove("active");
//             sliderDots.querySelector(".n" + num).classList.add("active");
//         }
//
//         // sliderNames.querySelector(".citymenu__link-active").classList.remove("citymenu__link-active");
//         // sliderNames.querySelector(".n" + num).classList.add("citymenu__link-active");
//         // setEntity(num);
//     }
//
//     //Функция для автопроигрывания слайдов
//     function initAutoplay() {
//         setInterval(() => {
//             let curNumber = +sliderImages.querySelector(".active").dataset.index;
//             let nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
//             moveSlider(nextNumber);
//         }, options.autoplayInterval);
//     }
//
// }
//
// let sliderOptions = {
//     dots: true,
//     // names: false,
//     autoplay: true,
//     autoplayInterval: 5000
// };
//
// document.addEventListener("DOMContentLoaded", function() {
//     initSlider(sliderOptions);
// });
