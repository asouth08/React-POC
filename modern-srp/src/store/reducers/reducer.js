import * as actionTypes from '../actions/actions';

const initialState = {
    searchLocation: '',
    properties: null,
    error: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SEARCH_LOCATION:
            return {
                ...state,
                searchLocation: action.value
            }
        case actionTypes.GET_PROPERTIES:
            return {
                ...state,
                properties: action.properties,
                error: false
            }
        case actionTypes.GET_PROPERTIES_FAILED:
            return {
                ...state,
                error: true
            }

    }
    return state;
}

export default reducer;