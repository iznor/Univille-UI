import {combineReducers} from 'redux';
import {persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {ActionTypes} from "./actionTypes";
import {userReducer, uiReducer, dataReducer,initialDataState, initialUserState, initialUiState} from './reducers'

const initialStoreState = {
    user: initialUserState,
    ui: initialUiState,
    data: initialDataState,
}

const rootPersistConfig = {
    key: 'root',
    storage,
    // whitelist: ['user', 'ui','member','discord'],
    blacklist: ['ui']
};

const uiPersistConfig = {
    key: 'ui',
    storage,
    whitelist: ['theme'],
};


const appReducer = combineReducers({
    ui: persistReducer(uiPersistConfig, uiReducer),
    user: userReducer,
    data: dataReducer,
});

const rootReducer = (state, action) => {
    if (action.type === ActionTypes.LOG_OUT) {
        return initialStoreState
    }
    return appReducer(state, action)
}

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    }),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

