export default class Slider {
    images = [
        {
            title: 'Banner1',
            url: './images/slider/banner1.png'
        },
        {
            title: 'Banner2',
            url: './images/slider/banner2.png'
        },
        {
            title: 'Banner3',
            url: './images/slider/banner3.png'
        }
    ]


    initSlider() {

        if (!this.images || !this.images.length) return;

        let options =  {
            dots: true,
            autoplay: true,
            autoplayInterval: 5000
        };

        let sliderImages = document.querySelector(".main-block__images");
        let sliderDots = document.querySelector(".main-block__slider-dots");

        let initImages = () => {
            this.images.forEach((image, index) => {
                let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${this.images[index].url});" data-index="${index}"></div>`;
                sliderImages.innerHTML += imageDiv;
            });
        }

        let initDots = () => {
            this.images.forEach((image, index) => {
                let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
                //   добавили точки в этот див sliderDots
                sliderDots.innerHTML += dot;
            });
            // добвляем обработчики событий (клика) на точки
            sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
                dot.addEventListener("click", function() {
                    moveSlider(this.dataset.index);
                })
            })
        }

        function moveSlider(num) {
            sliderImages.querySelector(".active").classList.remove("active");
            sliderImages.querySelector(".n" + num).classList.add("active");

            if (options.dots) {
                sliderDots.querySelector(".active").classList.remove("active");
                sliderDots.querySelector(".n" + num).classList.add("active");
            }
        }

        //Функция для автопроигрывания слайдов
        let initAutoplay = () => {
            setInterval(() => {
                let curNumber = +sliderImages.querySelector(".active").dataset.index;
                let nextNumber = curNumber === this.images.length - 1? 0 : curNumber + 1;
                moveSlider(nextNumber);
            }, options.autoplayInterval);
        }

        initImages();

        if (options.dots) {
            initDots();
        }

        if (options.autoplay) {
            initAutoplay();
        }
    }

}


