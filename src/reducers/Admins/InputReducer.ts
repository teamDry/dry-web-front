import { produce } from "immer";
import { InputAction } from "../../actions/admins/InputActions";
import { ActionTypes } from "../../actions/admins/ActionTypes";


/**
 * AdminLoginReducer과 같은 구조
 */
export interface InputState {
    id: string | null;
    password: string | null;
    nickname: string | null;
}

export const initialState: InputState = {
    id: null,
    password: null,
    nickname: null
}

const InputReducer = (state = initialState, action: InputAction): InputState => {
    return produce(state, draft => {
        switch(action.type) {
            case ActionTypes.ID_BLUR:
                draft.id = action.payload;
                break;
            
            case ActionTypes.PASSWORD_BLUR:
                draft.password = action.payload;
                break;

            case ActionTypes.NICKNAME_BLUR:
                draft.nickname = action.payload;
                break;

            default:
                break;
        }
    });
}

export default InputReducer;