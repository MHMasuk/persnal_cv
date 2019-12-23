import axios from 'axios';

import { FETCH_DATA_SUCCESS, FETCH_DATA_BEGIN } from '../type';

export const fetchUser = () => (dispatch) => {
    dispatch({
        type: FETCH_DATA_BEGIN
    })

    axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            dispatch({
                type: FETCH_DATA_SUCCESS,
                payload: response.data
            })
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
}