import { UPDATE_BOOKS } from "../actions/books-actions";

export default function booksReducer(state = [], action) {
    switch (action.type){
        case UPDATE_BOOKS:
            return action.payload.books;
            break;
        default:
            return state;
    }
}
