import {useCallback} from 'react';
import {useAppDispatch, useAppSelector} from "../store";
import {dataActions} from "../actions";
import {IDataState} from "../reducers";

export function useData() {
    const dispatch = useAppDispatch();
    const values:IDataState = useAppSelector(store => store.data);

    const setData = (dataState: Partial<IDataState>) => {
        dispatch(dataActions.setData(dataState))
    }
    const fetchKeywords = () => {
        dispatch(dataActions.fetchKeywords())
    }
    const fetchListings = () => {
        dispatch(dataActions.fetchListings())
    }
    const createKeyword = (keyword: string) => {
        dispatch(dataActions.createKeyword(keyword))
    }
    const deleteKeyword = (id: string) => {
        dispatch(dataActions.deleteKeyword(id))
    }
    const deleteListing = (id: string) => {
        dispatch(dataActions.deleteListing(id))
    }
    const searchListings = () => {
        dispatch(dataActions.searchListings())
    }


    return {
        dataState: values,
        dataActions: {
            setData: useCallback(setData, []),
            fetchKeywords: useCallback(fetchKeywords, []),
            fetchListings: useCallback(fetchListings, []),
            createKeyword: useCallback(createKeyword, []),
            deleteKeyword: useCallback(deleteKeyword, []),
            deleteListing: useCallback(deleteListing, []),
            searchListings: useCallback(searchListings, []),
        }
    }

}
