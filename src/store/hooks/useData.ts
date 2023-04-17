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



    return {
        dataState: values,
        dataActions: {
            setData: useCallback(setData, []),
        }
    }

}
