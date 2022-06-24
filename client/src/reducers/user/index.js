import { REGISTER_USER, GET_USER } from "../../actions/userAction";

const initialState = {
    addUserResult: false,
    addUserLoading: false,
    addUserError: false,

    getUserResult: false,
    getUserLoading: false,
    getUserError: false
}
const AddUser = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                addUserResult: action.payload.data,
                addUserLoading: action.payload.loading,
                addUserError: action.payload.errorMessage
            }
        case GET_USER:
            return {
                ...state,
                getUserResult: action.payload.data,
                getUserLoading: action.payload.loading,
                getUserError: action.payload.errorMessage
            }
        default:
            return state;
    }
};

export default AddUser;