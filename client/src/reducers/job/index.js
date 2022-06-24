import { GET_JOB, GET_DETAIL_JOB } from '../../actions/jobAction';

const initialState = {
    getJobResult: false,
    getJobLoading: false,
    getJobError: false,

    getDetailJobResult: false,
    getDetailJobLoading: false,
    getDetailJobError: false,
}

const job = (state = initialState, action) => {
    switch(action.type) {
        case GET_JOB:
            return {
                ...state,
                getJobResult: action.payload.data,
                getJobLoading: action.payload.loading,
                getJobError: action.payload.errorMessage
            }
        case GET_DETAIL_JOB:
            return {
                ...state,
                getDetailJobResult: action.payload.data,
                getDetailJobLoading: action.payload.loading,
                getDetailJobError: action.payload.errorMessage
            }
        default:
            return state;
    }
}

export default job;