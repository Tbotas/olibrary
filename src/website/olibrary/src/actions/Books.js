export const UPDATE_BOOKS = 'books:updateBooks'

export const updateBooks = books => {
    return {
        type: UPDATE_BOOKS,
        payload: {
            books: books
        }
    }
}

export const UPDATE_BOOK = 'books:updateBook'

export const updateBook = book => {
    return {
        type: UPDATE_BOOK,
        payload: {
            book: book
        }
    }
}