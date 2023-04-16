export enum ActionTypes {
    // UI ACTION TYPES
    SET_UI = 'app/ui/SET_UI',
    SET_LOADER = 'app/ui/SET_LOADER',
    SET_ALERT = 'app/ui/SET_ALERT',
    SET_SUCCESS = 'app/ui/SET_SUCCESS',
    CLOSE_SNACKBAR = 'app/ui/CLOSE_SNACKBAR',
    SET_THEME = 'app/ui/SET_THEME',
    SET_LANG = 'app/ui/SET_LANG',

    // USER
    SET_USER = 'app/user/SET_USER',
    SET_USER_INFO = 'app/user/SET_USER_INFO',
    SET_AUTH = 'app/user/SET_AUTH',
    LOG_OUT = 'app/user/LOG_OUT',
    LOG_IN = 'app/user/LOG_IN',
    SIGN_UP = 'app/user/SIGN_UP',
    TG_AUTH = 'app/user/TG_AUTH',
    TG_CODE = 'app/user/TG_CODE',

    // DATA
    SET_DATA = 'app/data/SET_DATA',
    SET_KEYWORDS = 'app/data/SET_KEYWORDS',
    SET_LISTINGS = 'app/data/SET_LISTINGS',
    ADD_KEYWORD = 'app/data/ADD_KEYWORD',
    ADD_LISTING = 'app/data/ADD_LISTING',
    REMOVE_KEYWORD = 'app/data/REMOVE_KEYWORD',
    REMOVE_LISTING = 'app/data/REMOVE_LISTING',

}
