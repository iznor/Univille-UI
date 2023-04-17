import {ActionTypes} from "../actionTypes";
import {uiActions} from "./uiActions";
import {dataApi} from "../../serverApi";


export const dataActions = {
    setData: (data) => {
        return {
            type: ActionTypes.SET_DATA,
            payload: data,
        };
    },


}
