import produce from "immer";
import {ActionTypes} from "../actionTypes";

export const initialDataState= {

}

export const dataReducer = (state = initialDataState, action) => {
    return produce(state, (draft) => {
        const {type, payload} = action;
        switch (type) {
            case ActionTypes.SET_DATA:
                Object.assign(draft, payload);
                break;

            case ActionTypes.LOG_OUT:
                draft = initialDataState;
                break;
            default:
                break;
        }
    })
}

export interface IDataState {

}
