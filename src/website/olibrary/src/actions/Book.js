export const UPDATE_BOOK = 'book:updateBook'

export const updateBook = book => {
    return {
        type: UPDATE_BOOK,
        payload: {
            book: book
        }
    }
}