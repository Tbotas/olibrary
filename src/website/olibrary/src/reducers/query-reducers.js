import { UPDATE_QUERY } from "../actions/Query";

export default function updateReducer(state = [], action) {
    switch (action.type){
        case UPDATE_QUERY:
            return action.payload.query
            break;
        default:
            return state;
    }
}