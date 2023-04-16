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
    setKeywords: (keywords) => {
        return {
            type: ActionTypes.SET_KEYWORDS,
            payload: keywords,
        };
    },
    setListings: (listings) => {
        return {
            type: ActionTypes.SET_LISTINGS,
            payload: listings,
        };
    },
    addKeyword: (keyword) => {
        return {
            type: ActionTypes.ADD_KEYWORD,
            payload: keyword,
        };
    },
    addListing: (listing) => {
        return {
            type: ActionTypes.ADD_LISTING,
            payload: listing,
        };
    },
    removeKeyword: (id) => {
        return {
            type: ActionTypes.REMOVE_KEYWORD,
            payload: id,
        };
    },
    removeListing: (id) => {
        return {
            type: ActionTypes.REMOVE_LISTING,
            payload: id,
        };
    },
    fetchKeywords: () => {
        return async (dispatch) => {
            try {
                dispatch(uiActions.setLoader(true));
                const response = await dataApi.getKeywords();
                dispatch(dataActions.setKeywords(response.data));
            } catch (err) {
                dispatch(uiActions.setAlert(err.message));
            } finally {
                dispatch(uiActions.setLoader(false));
            }
        };
    },
    fetchListings: () => {
        return async (dispatch) => {
            try {
                dispatch(uiActions.setLoader(true));
                const response = await dataApi.getListings();
                dispatch(dataActions.setListings(response.data));
            } catch (err) {
                dispatch(uiActions.setAlert(err.message));
            } finally {
                dispatch(uiActions.setLoader(false));
            }
        };
    },
    createKeyword: (name) => {
        return async (dispatch) => {
            try {
                dispatch(uiActions.setLoader(true));
                const response = await dataApi.createKeyword(name);
                dispatch(dataActions.addKeyword(response.data));
            } catch (err) {
                dispatch(uiActions.setAlert(err.message));
            } finally {
                dispatch(uiActions.setLoader(false));
            }
        };
    },
    deleteKeyword: (id) => {
        return async (dispatch) => {
            try {
                dispatch(uiActions.setLoader(true));
                await dataApi.deleteKeyword(id);
                dispatch(dataActions.removeKeyword(id));
            } catch (err) {
                dispatch(uiActions.setAlert(err.message));
            } finally {
                dispatch(uiActions.setLoader(false));
            }
        };
    },
    deleteListing: (id) => {
        return async (dispatch) => {
            try {
                dispatch(uiActions.setLoader(true));
                await dataApi.deleteListing(id);
                dispatch(dataActions.removeListing(id));
            } catch (err) {
                dispatch(uiActions.setAlert(err.message));
            } finally {
                dispatch(uiActions.setLoader(false));
            }
        };
    },
    searchListings: () => {
        return async (dispatch) => {
            try {
                dispatch(uiActions.setLoader(true));
                const response = await dataApi.searchListings();
                console.log(response)
                // dispatch(dataActions.setListings(response.data));
            } catch (err) {
                dispatch(uiActions.setAlert(err.message));
            } finally {
                dispatch(uiActions.setLoader(false));
            }
        };
    }

}
