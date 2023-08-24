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
