import axios from "axios";

export const START = "START";
export const SUCCESS = "SUCCESS";
export const FAIL = "FAIL";

export const getUser = () => {
    dispatch({type: START});
    axios.get('user api')
        .then(res => {
            dispatch({type: SUCCESS, payload: res.data.value});
        })
        .catch(err => {
            dispatch({type: FAIL, payload: err.data.value})
        });
};