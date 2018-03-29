export const UPDATE_BOOKS = 'books:updateBooks'

export function updateBooks(newBooks) {
    return {
        type: UPDATE_BOOKS,
        payload: {
            books: newBooks
        }
    }
}

//  {title: 'Mon titre', description: 'Ma description'}
