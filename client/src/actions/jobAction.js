import axios from 'axios';

const URL = 'http://dev3.dansmultipro.co.id/api/recruitment/positions';

const GET_JOB = 'GET_JOB';
const GET_DETAIL_JOB = 'GET_DETAIL_JOB';

const getJob = (dispatch, description, location, full_time, page) => {
    dispatch ({
        type: "GET_JOB",
        payload: {
            loading: true,
            data: false,
            errorMessage: false
        }
    })
    axios ({
        method: 'GET',
        url: URL + '.json',
        params: {
            description: description,
            location: location,
            full_time: full_time,
            page: page
        },
        timeout: 120000
    })
        .then ((res) => {
            dispatch ({
                type: "GET_JOB",
                payload: {
                    loading: false,
                    data: res.data,
                    errorMessage: false
                }
            })
        })
        .catch ((err) => {
            dispatch ({
                type: "GET_JOB",
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: err.message
                }
            })
        })
}

const getDetailJob = (dispatch, id) => {
    dispatch ({
        type: "GET_DETAIL_JOB",
        payload: {
            loading: true,
            data: false,
            errorMessage: false
        }
    })
    axios ({
        method: 'GET',
        url: URL + '/' +id,
        timeout: 120000
    })
        .then((res) => {
            dispatch({
                type: "GET_DETAIL_JOB",
                payload: {
                    loading: false,
                    data: res.data,
                    errorMessage: false
                }
            })
        })
        .catch ((err) => {
            dispatch ({
                type: "GET_DETAIL_JOB",
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: err.message
                }
            })
        })
}

export {
    getJob, GET_JOB,
    getDetailJob, GET_DETAIL_JOB
}