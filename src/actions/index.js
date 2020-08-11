import axios from "axios";

export const START = "START";
export const SUCCESS = "SUCCESS";
export const FAIL = "FAIL";

export const getUser = () => dispatch => {
    dispatch({type: START});
    axios.get(`http://localhost:5000/router/:id`)
        .then(res => {
            dispatch({type: SUCCESS, payload: res.data.value});
        })
        .catch(err => {
            dispatch({type: FAIL, payload: err.data.value})
        });
};