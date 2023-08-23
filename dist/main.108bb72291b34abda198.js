/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/style.css?");

/***/ }),

/***/ "./Book.js":
/*!*****************!*\
  !*** ./Book.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Book)\n/* harmony export */ });\nclass Book {\r\n\r\n\r\n    showBooks(url) {\r\n        //делает кнопку Load more, не активной после нажатия 1 раз, пока не загрузится ответ\r\n        document.querySelector('.main-block2__load-more-btn').disabled = true\r\n        document.querySelector('.load-spinner').classList.remove('load-spinner_hide')\r\n\r\n        fetch(url)\r\n            .then(response => response.json())\r\n            .then(json => {\r\n                let booksField = document.querySelector('.main-block2__books')\r\n                let out = ''\r\n                json.items.forEach(function (item) {\r\n\r\n                    //Отображение авторов, через запятую\r\n                    let authorList = 'No author'\r\n                    if (item.volumeInfo.authors) {\r\n                        let authors = item.volumeInfo.authors\r\n                        authorList = item.volumeInfo.authors[0]\r\n                        if (authors.length > 1) {\r\n                            for (let i = 1; i < authors.length; i++) {\r\n                                authorList += ', ' + authors[i]\r\n                            }\r\n                        }\r\n                    }\r\n                    //Для обрезания заголовка книги, если сильно длинный\r\n                    let title = (item.volumeInfo.title) ? item.volumeInfo.title : 'No title'\r\n\r\n                    //Отображение рейтинга книги\r\n                    let averageRating = item.volumeInfo.averageRating\r\n                    let ratingsCount = item.volumeInfo.ratingsCount\r\n                    if (!averageRating || !ratingsCount) {\r\n                        averageRating = ''\r\n                        ratingsCount = ''\r\n                    } else {\r\n                        averageRating = Math.round(averageRating)\r\n                        ratingsCount = ratingsCount + ' review'\r\n                    }\r\n                    //Обрезание длинного описания\r\n                    let description = (item.volumeInfo.description) ? item.volumeInfo.description : 'No description'\r\n                    function cropText(text, size) {\r\n                        if (text.length <= size) {\r\n                            return text;\r\n                        } else {\r\n                            let subString = text.substring(0, size);\r\n                            return subString.substring(0, subString.lastIndexOf(' ')) + \"...\"\r\n                        }\r\n                    }\r\n                    //Отображение стандартной обложки если ее нет\r\n                    let thumbnail = (item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail) ?\r\n                        item.volumeInfo.imageLinks.thumbnail : \"./images/no-cover.png\"\r\n\r\n                    //Отображение, когда книга есть в корзине\r\n                    let bookId = item.id\r\n                    let includesBookInCart = ''\r\n                    if (localStorage.getItem('cart')) {\r\n                        if (JSON.parse(localStorage.getItem('cart')).includes(bookId)) {\r\n                            includesBookInCart = 'book-in-cart'\r\n                        }\r\n                    }\r\n\r\n                    out += `<div class=\"main-block2__book-card book-card\" data-id=\"${item.id}\">\r\n                            <img class=\"book-card__image\" src=${thumbnail} alt=\"book-cover\">\r\n                            <div class=\"book-card__body\">\r\n                                <div class=\"book-card__author\">\r\n                                    ${cropText(authorList, 70)}\r\n                                </div>\r\n                                <div class=\"book-card__title\">\r\n                                    ${cropText(title, 80)}\r\n                                </div>\r\n                                <div class=\"book-card__rating\">\r\n                                    <div class=\"book-card__rating_stars\">\r\n                                        <div class=\"rating-stars stars${averageRating}\"></div>\r\n                                    </div>\r\n                                    <div class=\"book-card__rating_review\">\r\n                                        ${ratingsCount}\r\n                                    </div>\r\n                                </div>\r\n                                <p class=\"book-card__review\">\r\n                                    ${cropText(description, 100)}\r\n                                </p>\r\n                                <div class=\"book-card__price\">\r\n                                    ${(item.saleInfo.listPrice) ?\r\n                                        `${item.saleInfo.listPrice.amount} ${item.saleInfo.listPrice.currencyCode}` :\r\n                                        ' '}\r\n                                </div>\r\n                                <button class=\"book-card__btn-bye ${includesBookInCart}\"></button>\r\n                            </div>\r\n                        </div>`\r\n                })\r\n\r\n                booksField.insertAdjacentHTML('beforeend', out)\r\n\r\n                //делает кнопку Load more, снова активной после выполнения запроса\r\n                document.querySelector('.main-block2__load-more-btn').disabled = false\r\n                document.querySelector('.load-spinner').classList.add('load-spinner_hide')\r\n            })\r\n            .catch(err => console.log('Ошибка: ', err))\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./Book.js?");

/***/ }),

/***/ "./Slider.js":
/*!*******************!*\
  !*** ./Slider.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Slider)\n/* harmony export */ });\nclass Slider {\r\n    images = [\r\n        {\r\n            title: 'Banner1',\r\n            url: './images/slider/banner1.png'\r\n        },\r\n        {\r\n            title: 'Banner2',\r\n            url: './images/slider/banner2.png'\r\n        },\r\n        {\r\n            title: 'Banner3',\r\n            url: './images/slider/banner3.png'\r\n        }\r\n    ]\r\n\r\n\r\n    initSlider() {\r\n\r\n        if (!this.images || !this.images.length) return;\r\n\r\n        let options =  {\r\n            dots: true,\r\n            autoplay: true,\r\n            autoplayInterval: 5000\r\n        };\r\n\r\n        let sliderImages = document.querySelector(\".main-block__images\");\r\n        let sliderDots = document.querySelector(\".main-block__slider-dots\");\r\n\r\n        let initImages = () => {\r\n            this.images.forEach((image, index) => {\r\n                let imageDiv = `<div class=\"image n${index} ${index === 0? \"active\" : \"\"}\" style=\"background-image:url(${this.images[index].url});\" data-index=\"${index}\"></div>`;\r\n                sliderImages.innerHTML += imageDiv;\r\n            });\r\n        }\r\n\r\n        let initDots = () => {\r\n            this.images.forEach((image, index) => {\r\n                let dot = `<div class=\"slider__dots-item n${index} ${index === 0? \"active\" : \"\"}\" data-index=\"${index}\"></div>`;\r\n                //   добавили точки в этот див sliderDots\r\n                sliderDots.innerHTML += dot;\r\n            });\r\n            // добвляем обработчики событий (клика) на точки\r\n            sliderDots.querySelectorAll(\".slider__dots-item\").forEach(dot => {\r\n                dot.addEventListener(\"click\", function() {\r\n                    moveSlider(this.dataset.index);\r\n                })\r\n            })\r\n        }\r\n\r\n        function moveSlider(num) {\r\n            sliderImages.querySelector(\".active\").classList.remove(\"active\");\r\n            sliderImages.querySelector(\".n\" + num).classList.add(\"active\");\r\n\r\n            if (options.dots) {\r\n                sliderDots.querySelector(\".active\").classList.remove(\"active\");\r\n                sliderDots.querySelector(\".n\" + num).classList.add(\"active\");\r\n            }\r\n        }\r\n\r\n        //Функция для автопроигрывания слайдов\r\n        let initAutoplay = () => {\r\n            setInterval(() => {\r\n                let curNumber = +sliderImages.querySelector(\".active\").dataset.index;\r\n                let nextNumber = curNumber === this.images.length - 1? 0 : curNumber + 1;\r\n                moveSlider(nextNumber);\r\n            }, options.autoplayInterval);\r\n        }\r\n\r\n        initImages();\r\n\r\n        if (options.dots) {\r\n            initDots();\r\n        }\r\n\r\n        if (options.autoplay) {\r\n            initAutoplay();\r\n        }\r\n    }\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./Slider.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Book_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Book.js */ \"./Book.js\");\n/* harmony import */ var _Slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider.js */ \"./Slider.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/style.css */ \"./styles/style.css\");\n\r\n\r\n\r\n\r\n\r\nlet booksInCart = []\r\nlet book = new _Book_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\r\nlet slider = new _Slider_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\r\nloadCardBooks()\r\nchangeCartCounter()\r\n\r\n\r\nlet url = `https://www.googleapis.com/books/v1/volumes?`\r\nlet params = new URLSearchParams({\r\n    q : 'subject:Architecture',\r\n    printType : 'books',\r\n    startIndex : 1,\r\n    maxResults : 6,\r\n    key : 'AIzaSyBWvHuQs5ntCd8btlSNhXEmP8XZRaYigS4'\r\n})\r\n// console.log('url: ', `${url + params.toString()}`)\r\n\r\n\r\n// function showBooks(url) {\r\n//     fetch(url)\r\n//         .then(response => response.json())\r\n//         .then(json => {\r\n//             let booksField = document.querySelector('.main-block2__books')\r\n//             let out = ''\r\n//             json.items.forEach(function (item) {\r\n//\r\n//                 //Отображение авторов, через запятую\r\n//                 let authorList = 'No author'\r\n//                 if (item.volumeInfo.authors) {\r\n//                     let authors = item.volumeInfo.authors\r\n//                     authorList = item.volumeInfo.authors[0]\r\n//                     if (authors.length > 1) {\r\n//                         for (let i = 1; i < authors.length; i++) {\r\n//                             authorList += ', ' + authors[i]\r\n//                         }\r\n//                     }\r\n//                 }\r\n//                 //Для обрезания заголовка книги, если сильно длинный\r\n//                 let title = (item.volumeInfo.title) ? item.volumeInfo.title : 'No title'\r\n//\r\n//                 //Отображение рейтинга книги\r\n//                 let averageRating = item.volumeInfo.averageRating\r\n//                 let ratingsCount = item.volumeInfo.ratingsCount\r\n//                 if (!averageRating || !ratingsCount) {\r\n//                     averageRating = ''\r\n//                     ratingsCount = ''\r\n//                 } else {\r\n//                     averageRating = Math.round(averageRating)\r\n//                     ratingsCount = ratingsCount + ' review'\r\n//                 }\r\n//                 //Обрезание длинного описания\r\n//                 let description = (item.volumeInfo.description) ? item.volumeInfo.description : 'No description'\r\n//                 function cropText(text, size) {\r\n//                     if (text.length <= size) {\r\n//                         return text;\r\n//                     } else {\r\n//                         let subString = text.substring(0, size);\r\n//                         return subString.substring(0, subString.lastIndexOf(' ')) + \"...\"\r\n//                     }\r\n//                 }\r\n//                 //Отображение стандартной обложки если ее нет\r\n//                 let thumbnail = (item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail) ?\r\n//                     item.volumeInfo.imageLinks.thumbnail : \"./images/no-cover.png\"\r\n//\r\n//                 //Отображение, когда книга есть в корзине\r\n//                 let bookId = item.id\r\n//                 let includesBookInCart = ''\r\n//                 if (localStorage.getItem('cart')) {\r\n//                     if (JSON.parse(localStorage.getItem('cart')).includes(bookId)) {\r\n//                         includesBookInCart = 'book-in-cart'\r\n//                     }\r\n//                 }\r\n//\r\n//                 out += `<div class=\"main-block2__book-card book-card\" data-id=\"${item.id}\">\r\n//                             <img class=\"book-card__image\" src=${thumbnail} alt=\"book-cover\">\r\n//                             <div class=\"book-card__body\">\r\n//                                 <div class=\"book-card__author\">\r\n//                                     ${authorList}\r\n//                                 </div>\r\n//                                 <div class=\"book-card__title\">\r\n//                                     ${cropText(title, 80)}\r\n//                                 </div>\r\n//                                 <div class=\"book-card__rating\">\r\n//                                     <div class=\"book-card__rating_stars\">\r\n//                                         <div class=\"rating-stars stars${averageRating}\"></div>\r\n//                                     </div>\r\n//                                     <div class=\"book-card__rating_review\">\r\n//                                         ${ratingsCount}\r\n//                                     </div>\r\n//                                 </div>\r\n//                                 <p class=\"book-card__review\">\r\n//                                     ${cropText(description, 100)}\r\n//                                 </p>\r\n//                                 <div class=\"book-card__price\">\r\n//                                     ${(item.saleInfo.listPrice) ?\r\n//                                         `${item.saleInfo.listPrice.amount} ${item.saleInfo.listPrice.currencyCode}` :\r\n//                                         ' '}\r\n//                                 </div>\r\n//                                 <button class=\"book-card__btn-bye ${includesBookInCart}\"></button>\r\n//                             </div>\r\n//                         </div>`\r\n//             })\r\n//\r\n//             booksField.insertAdjacentHTML('beforeend', out)\r\n//         })\r\n//         .catch(err => console.log('Ошибка: ', err))\r\n// }\r\n\r\nbook.showBooks(`${url + params.toString()}`)\r\n\r\n//Нажатие на кнопку загрузить еше книги (Load more)\r\nlet loadMoreBtn = document.querySelector('.main-block2__load-more-btn')\r\nloadMoreBtn.addEventListener('click', function () {\r\n    let nextPage = (+params.get('startIndex') + 6).toString()\r\n    params.set('startIndex', nextPage)\r\n    book.showBooks(`${url + params.toString()}`)\r\n})\r\n\r\n\r\n//-------------------События-при-кликеах-на-категории-------------------\r\nlet categoryList = document.querySelector('.category-menu__list')\r\n\r\ncategoryList.addEventListener('click', function(event) {\r\n\r\n    //Действия для кликов по категориям книг\r\n    if(event.target.classList.contains('category-menu__item')) {\r\n        //Удаляем класс активной категории и устанвливаем класс активной на новую категорию\r\n        document.querySelector('.category-active').classList.remove('category-active')\r\n        event.target.classList.add('category-active')\r\n\r\n        let categoryName = event.target.innerText\r\n        params.set('q', `subject:` + categoryName)\r\n        document.querySelector('.main-block2__books').innerHTML = ''\r\n        book.showBooks(`${url + params.toString()}`)\r\n    }\r\n})\r\n\r\n//-----------------События-при-кликеах-на-кнопку-купить-----------------\r\nlet booksList = document.querySelector('.main-block2__books')\r\n\r\nbooksList.addEventListener('click', function(event) {\r\n\r\n    //Действия для кликов по кнопке купить\r\n    if(event.target.classList.contains('book-card__btn-bye')) {\r\n        let btn = event.target\r\n        let id = event.target.parentElement.parentElement.dataset.id\r\n        if (event.target.classList.contains('book-in-cart')) {\r\n            booksInCart.splice(booksInCart.indexOf(id), 1)\r\n            saveBooks()\r\n        } else {\r\n            booksInCart.push(id)\r\n            saveBooks()\r\n        }\r\n        btn.classList.toggle('book-in-cart')\r\n        changeCartCounter()\r\n    }\r\n})\r\n\r\n// функция сохранения id книг в LocalStorage\r\nfunction saveBooks() {\r\n    localStorage.setItem('cart', JSON.stringify(booksInCart))\r\n}\r\n\r\n// загрузка id книг из LocalStorage\r\nfunction loadCardBooks() {\r\n    if (localStorage.getItem('cart')) {\r\n        booksInCart = JSON.parse(localStorage.getItem('cart'))\r\n    }\r\n}\r\n\r\n//Изменение счетчика в корзине\r\nfunction changeCartCounter() {\r\n    let counter = document.querySelector('.shop-bag__counter')\r\n    if (booksInCart.length === 0) {\r\n        counter.style.display = 'none'\r\n    } else {\r\n        counter.style.display = 'block'\r\n    }\r\n    counter.innerText = `${booksInCart.length}`\r\n}\r\n\r\n//Загрузка слайдера\r\ndocument.addEventListener(\"DOMContentLoaded\", function() {\r\n    slider.initSlider();\r\n});\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;