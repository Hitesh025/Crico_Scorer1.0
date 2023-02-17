import { Actions } from '../types/types';

const initialState = {
    playerInfo: [],
    // currentLoction: []
};

const playerInfoReducer = (state = initialState, action) => {
    console.log("player name---->", state)
    switch (action.type) {
        case Actions.SET_PLAYER_INFO:
            return {
                ...state,
                playerInfo: action.payload,
            };
        default: {
            return state;
        }
    }
}

export default playerInfoReducer
