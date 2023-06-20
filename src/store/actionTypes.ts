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

  // DATA
  SET_DATA = 'app/data/SET_DATA',
  SET_GAMES = 'app/data/SET_GAMES',
  SET_CLASSES = 'app/data/SET_CLASSES',
  SET_SCHOOLS = 'app/data/SET_SCHOOLS',
  ADD_GAME = 'app/data/ADD_GAME',
  REMOVE_GAME = 'app/data/REMOVE_GAME',
  EDIT_GAME = 'app/data/EDIT_GAME',
  ADD_CLASS = 'app/data/ADD_CLASS',
  SET_EDITOR = 'app/data/SET_EDITOR',
  SET_EDITOR_METADATA = 'app/data/SET_EDITOR_METADATA',
  EDITOR_ADD_MISSION = 'app/data/EDITOR_ADD_MISSION',
  EDITOR_REMOVE_MISSION = 'app/data/EDITOR_REMOVE_MISSION',
  EDITOR_EDIT_MISSION = 'app/data/EDITOR_EDIT_MISSION',
}
