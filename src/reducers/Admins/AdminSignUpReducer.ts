import { produce } from "immer";
import { ActionTypes, Admin } from "../../actions/admins/ActionTypes";
import { IdCheck, NicknameCheck, PasswordCheck, PasswordReCheck, SignUpAction } from "../../actions/admins/SignUpActions";

/**
 * AdminLoginReducer과 같은 구조
 */

export interface SignUpState {
    admin: Admin | null;
    idCheck: IdCheck | null;
    passwordCheck: PasswordCheck | null;
    passwordReCheck: PasswordReCheck | null;
    nicknameCheck: NicknameCheck | null;
}

export const initialState: SignUpState = {
    admin: null,
    idCheck: null,
    passwordCheck: null,
    passwordReCheck: null,
    nicknameCheck: null,
}

const AdminSignUpReducer = (state = initialState, action: SignUpAction): SignUpState => {
    return produce(state, draft => {
        switch(action.type) {
            case ActionTypes.ID_CHECK:
                draft.idCheck = action.payload;
                break;
            
            case ActionTypes.PASSWORD_CHECK:
                draft.passwordCheck = action.payload;
                break;
            
            case ActionTypes.PASSWORD_RECHECK:
                draft.passwordReCheck = action.payload;
                break;

            case ActionTypes.NICKNAME_CHECK:
                draft.nicknameCheck = action.payload;
                break;

            default: 
                break;
        }
    })
}

export default AdminSignUpReducer;