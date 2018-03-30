import { UPDATE_FILTERS } from "../actions/Filters";

export default function updateReducer(state = [], action) {
    switch (action.type){
        case UPDATE_FILTERS:
            return action.payload.filters;
            break;
        default:
            return state;
    }
}