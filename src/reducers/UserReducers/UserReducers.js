import {
    FETCH_DATA_SUCCESS,
    FETCH_DATA_BEGIN,
    FETCH_DATA_FAIL
} from '../../actions/type';

const initialState = {
    users: [],
    is_loading: false
}

export default function (state= initialState, action) {
    switch(action.type) {
        case FETCH_DATA_BEGIN:
            return {
                ...state,
                is_loading: true
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                users: action.payload,
                is_loading: false
            };
        case FETCH_DATA_FAIL:
            return {
                ...state,
                is_loading: true
            }
        default:
            return state;
    }
}