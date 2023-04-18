import Book from './Book.js'
import Slider from './Slider.js'
import './styles/style.css'


let booksInCart = []
let book = new Book()
let slider = new Slider()
loadCardBooks()
changeCartCounter()


let url = `https://www.googleapis.com/books/v1/volumes?`
let params = new URLSearchParams({
    q : 'subject:Architecture',
    printType : 'books',
    startIndex : 1,
    maxResults : 6,
    key : 'AIzaSyBWvHuQs5ntCd8btlSNhXEmP8XZRaYigS4'
})
// console.log('url: ', `${url + params.toString()}`)


// function showBooks(url) {
//     fetch(url)
//         .then(response => response.json())
//         .then(json => {
//             let booksField = document.querySelector('.main-block2__books')
//             let out = ''
//             json.items.forEach(function (item) {
//
//                 //Отображение авторов, через запятую
//                 let authorList = 'No author'
//                 if (item.volumeInfo.authors) {
//                     let authors = item.volumeInfo.authors
//                     authorList = item.volumeInfo.authors[0]
//                     if (authors.length > 1) {
//                         for (let i = 1; i < authors.length; i++) {
//                             authorList += ', ' + authors[i]
//                         }
//                     }
//                 }
//                 //Для обрезания заголовка книги, если сильно длинный
//                 let title = (item.volumeInfo.title) ? item.volumeInfo.title : 'No title'
//
//                 //Отображение рейтинга книги
//                 let averageRating = item.volumeInfo.averageRating
//                 let ratingsCount = item.volumeInfo.ratingsCount
//                 if (!averageRating || !ratingsCount) {
//                     averageRating = ''
//                     ratingsCount = ''
//                 } else {
//                     averageRating = Math.round(averageRating)
//                     ratingsCount = ratingsCount + ' review'
//                 }
//                 //Обрезание длинного описания
//                 let description = (item.volumeInfo.description) ? item.volumeInfo.description : 'No description'
//                 function cropText(text, size) {
//                     if (text.length <= size) {
//                         return text;
//                     } else {
//                         let subString = text.substring(0, size);
//                         return subString.substring(0, subString.lastIndexOf(' ')) + "..."
//                     }
//                 }
//                 //Отображение стандартной обложки если ее нет
//                 let thumbnail = (item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail) ?
//                     item.volumeInfo.imageLinks.thumbnail : "./images/no-cover.png"
//
//                 //Отображение, когда книга есть в корзине
//                 let bookId = item.id
//                 let includesBookInCart = ''
//                 if (localStorage.getItem('cart')) {
//                     if (JSON.parse(localStorage.getItem('cart')).includes(bookId)) {
//                         includesBookInCart = 'book-in-cart'
//                     }
//                 }
//
//                 out += `<div class="main-block2__book-card book-card" data-id="${item.id}">
//                             <img class="book-card__image" src=${thumbnail} alt="book-cover">
//                             <div class="book-card__body">
//                                 <div class="book-card__author">
//                                     ${authorList}
//                                 </div>
//                                 <div class="book-card__title">
//                                     ${cropText(title, 80)}
//                                 </div>
//                                 <div class="book-card__rating">
//                                     <div class="book-card__rating_stars">
//                                         <div class="rating-stars stars${averageRating}"></div>
//                                     </div>
//                                     <div class="book-card__rating_review">
//                                         ${ratingsCount}
//                                     </div>
//                                 </div>
//                                 <p class="book-card__review">
//                                     ${cropText(description, 100)}
//                                 </p>
//                                 <div class="book-card__price">
//                                     ${(item.saleInfo.listPrice) ?
//                                         `${item.saleInfo.listPrice.amount} ${item.saleInfo.listPrice.currencyCode}` :
//                                         ' '}
//                                 </div>
//                                 <button class="book-card__btn-bye ${includesBookInCart}"></button>
//                             </div>
//                         </div>`
//             })
//
//             booksField.insertAdjacentHTML('beforeend', out)
//         })
//         .catch(err => console.log('Ошибка: ', err))
// }

book.showBooks(`${url + params.toString()}`)

//Нажатие на кнопку загрузить еше книги (Load more)
let loadMoreBtn = document.querySelector('.main-block2__load-more-btn')
loadMoreBtn.addEventListener('click', function () {
    let nextPage = (+params.get('startIndex') + 6).toString()
    params.set('startIndex', nextPage)
    book.showBooks(`${url + params.toString()}`)
})


//-------------------События-при-кликеах-на-категории-------------------
let categoryList = document.querySelector('.category-menu__list')

categoryList.addEventListener('click', function(event) {

    //Действия для кликов по категориям книг
    if(event.target.classList.contains('category-menu__item')) {
        //Удаляем класс активной категории и устанвливаем класс активной на новую категорию
        document.querySelector('.category-active').classList.remove('category-active')
        event.target.classList.add('category-active')

        let categoryName = event.target.innerText
        params.set('q', `subject:` + categoryName)
        document.querySelector('.main-block2__books').innerHTML = ''
        book.showBooks(`${url + params.toString()}`)
    }
})

//-----------------События-при-кликеах-на-кнопку-купить-----------------
let booksList = document.querySelector('.main-block2__books')

booksList.addEventListener('click', function(event) {

    //Действия для кликов по кнопке купить
    if(event.target.classList.contains('book-card__btn-bye')) {
        let btn = event.target
        let id = event.target.parentElement.parentElement.dataset.id
        if (event.target.classList.contains('book-in-cart')) {
            booksInCart.splice(booksInCart.indexOf(id), 1)
            saveBooks()
        } else {
            booksInCart.push(id)
            saveBooks()
        }
        btn.classList.toggle('book-in-cart')
        changeCartCounter()
    }
})

// функция сохранения id книг в LocalStorage
function saveBooks() {
    localStorage.setItem('cart', JSON.stringify(booksInCart))
}

// загрузка id книг из LocalStorage
function loadCardBooks() {
    if (localStorage.getItem('cart')) {
        booksInCart = JSON.parse(localStorage.getItem('cart'))
    }
}

//Изменение счетчика в корзине
function changeCartCounter() {
    let counter = document.querySelector('.shop-bag__counter')
    if (booksInCart.length === 0) {
        counter.style.display = 'none'
    } else {
        counter.style.display = 'block'
    }
    counter.innerText = `${booksInCart.length}`
}

//Загрузка слайдера
document.addEventListener("DOMContentLoaded", function() {
    slider.initSlider();
});
