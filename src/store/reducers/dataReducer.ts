import produce from "immer";
import {ActionTypes} from "../actionTypes";

export const initialDataState: IDataState = {
    keywords: [],
    listings: [],
}

export const dataReducer = (state = initialDataState, action) => {
    return produce(state, (draft) => {
        const {type, payload} = action;
        switch (type) {
            case ActionTypes.SET_DATA:
                Object.assign(draft, payload);
                break;
            case ActionTypes.SET_KEYWORDS:
                draft.keywords = payload;
                break;
            case ActionTypes.SET_LISTINGS:
                draft.listings = payload;
                break;
            case ActionTypes.ADD_KEYWORD:
                draft.keywords.push(payload);
                break;
            case ActionTypes.ADD_LISTING:
                draft.listings.push(payload);
                break;
            case ActionTypes.REMOVE_KEYWORD:
                draft.keywords = draft.keywords.filter((keyword) => keyword.id !== payload);
                break;
            case ActionTypes.REMOVE_LISTING:
                draft.listings = draft.listings.filter((listing) => listing.id !== payload);
                break;
            case ActionTypes.LOG_OUT:
                draft = initialDataState;
                break;
            default:
                break;
        }
    })
}


export interface IKeyword {
    id: string;
    keyword: string;
}

export interface IListing {
    id: string;
    name: string;
    description: string;
    members: number;
    imageUrl: string;
    link: string;
    listingType: string;
    keyword: string;
    user: string;
    createdAt: string;
    updatedAt: string;
}

export interface IDataState {
    keywords: IKeyword[];
    listings: IListing[];
}
