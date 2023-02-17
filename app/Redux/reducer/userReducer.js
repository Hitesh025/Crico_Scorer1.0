import { Actions } from '../types/types';

const initialState = {
    userInfo: [],
    // currentLoction: []
};

const userInfoReducer = (state = initialState, action) => {
    console.log("user name---->",state)
    switch (action.type) {
        case Actions.SET_USER_INFO:
            return {
                ...state,
                userInfo: action.payload,
            };
        default: {
            return state;
        }
    }
}

export default userInfoReducer
