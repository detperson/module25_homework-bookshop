export default class Book {


    showBooks(url) {
        fetch(url)
            .then(response => response.json())
            .then(json => {
                let booksField = document.querySelector('.main-block2__books')
                let out = ''
                json.items.forEach(function (item) {

                    //Отображение авторов, через запятую
                    let authorList = 'No author'
                    if (item.volumeInfo.authors) {
                        let authors = item.volumeInfo.authors
                        authorList = item.volumeInfo.authors[0]
                        if (authors.length > 1) {
                            for (let i = 1; i < authors.length; i++) {
                                authorList += ', ' + authors[i]
                            }
                        }
                    }
                    //Для обрезания заголовка книги, если сильно длинный
                    let title = (item.volumeInfo.title) ? item.volumeInfo.title : 'No title'

                    //Отображение рейтинга книги
                    let averageRating = item.volumeInfo.averageRating
                    let ratingsCount = item.volumeInfo.ratingsCount
                    if (!averageRating || !ratingsCount) {
                        averageRating = ''
                        ratingsCount = ''
                    } else {
                        averageRating = Math.round(averageRating)
                        ratingsCount = ratingsCount + ' review'
                    }
                    //Обрезание длинного описания
                    let description = (item.volumeInfo.description) ? item.volumeInfo.description : 'No description'
                    function cropText(text, size) {
                        if (text.length <= size) {
                            return text;
                        } else {
                            let subString = text.substring(0, size);
                            return subString.substring(0, subString.lastIndexOf(' ')) + "..."
                        }
                    }
                    //Отображение стандартной обложки если ее нет
                    let thumbnail = (item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail) ?
                        item.volumeInfo.imageLinks.thumbnail : "./images/no-cover.png"

                    //Отображение, когда книга есть в корзине
                    let bookId = item.id
                    let includesBookInCart = ''
                    if (localStorage.getItem('cart')) {
                        if (JSON.parse(localStorage.getItem('cart')).includes(bookId)) {
                            includesBookInCart = 'book-in-cart'
                        }
                    }

                    out += `<div class="main-block2__book-card book-card" data-id="${item.id}">
                            <img class="book-card__image" src=${thumbnail} alt="book-cover">
                            <div class="book-card__body">
                                <div class="book-card__author">
                                    ${cropText(authorList, 70)}
                                </div>
                                <div class="book-card__title">
                                    ${cropText(title, 80)}
                                </div>
                                <div class="book-card__rating">
                                    <div class="book-card__rating_stars">
                                        <div class="rating-stars stars${averageRating}"></div>
                                    </div>
                                    <div class="book-card__rating_review">
                                        ${ratingsCount}
                                    </div>
                                </div>
                                <p class="book-card__review">
                                    ${cropText(description, 100)}
                                </p>
                                <div class="book-card__price">
                                    ${(item.saleInfo.listPrice) ?
                                        `${item.saleInfo.listPrice.amount} ${item.saleInfo.listPrice.currencyCode}` :
                                        ' '}
                                </div>
                                <button class="book-card__btn-bye ${includesBookInCart}"></button>
                            </div>
                        </div>`
                })

                booksField.insertAdjacentHTML('beforeend', out)
            })
            .catch(err => console.log('Ошибка: ', err))
    }

}