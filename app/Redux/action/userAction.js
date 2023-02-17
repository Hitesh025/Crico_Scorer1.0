import { Actions } from '../types/types';

export const  setUserInfo = (payload) => {
    console.log('---->',payload)
    return {
        type: Actions.SET_USER_INFO,
        payload: payload
    }
}