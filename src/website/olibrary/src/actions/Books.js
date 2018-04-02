export const UPDATE_BOOKS = 'books:updateBooks'

export const updateBooks = books => {
    return {
        type: UPDATE_BOOKS,
        payload: {
            books: books
        }
    }
}

