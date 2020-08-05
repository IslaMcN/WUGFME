import {START, SUCCESS} from './actions'

const initialState = {
    value: null,
    isFetching: false,
    error: ""
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case START:
            return{
                ...state,
                isFetching: true,
            };
        case SUCCESS:
            return{
                ...state,
                isFetching: false,
                value: action.payload
            };
        default:
            return state;
    }
}