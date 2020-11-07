import * as actionTypes from '../actions/actions';
import axios from 'axios';

export const getProperties = (properties) => {
    return {
        type: actionTypes.GET_PROPERTIES,
        properties: properties
    }
}

export const getPropertiesFailed = () => {
    return {
        type: actionTypes.GET_PROPERTIES_FAILED
    }
}

export const initProperties =() => {
    return dispatch => {
        axios.get('https://react-poc-6909c.firebaseio.com/listings.json')
        .then(response => {
            dispatch(getProperties(response.data))
        })
        .catch(error => {
            dispatch(getPropertiesFailed());
        });
    }
}