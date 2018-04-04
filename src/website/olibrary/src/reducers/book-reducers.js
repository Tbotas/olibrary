import { UPDATE_BOOK } from "../actions/Book";

export default function bookReducer(state = [], action) {
    switch (action.type){
        case UPDATE_BOOK:
            return action.payload.book;
            break;
        default:
            return state;
    }
}
