import { Actions } from '../types/types';

export const  setPlayerInfo = (payload) => {
    console.log('player---->',payload)
    return {
        type: Actions.SET_PLAYER_INFO,
        payload: payload
    }
}