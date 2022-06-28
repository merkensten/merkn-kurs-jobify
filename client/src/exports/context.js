import {
  AppProvider,
  initialState,
  useAppContext,
} from '../context/appContext';
import { reducer } from '../context/reducer';
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from '../context/actions';

export {
  AppProvider,
  initialState,
  useAppContext,
  reducer,
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
};
