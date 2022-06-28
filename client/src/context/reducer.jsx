// internal imports
import { ACTIONS } from '../exports/contexts/actions';
import { initialState } from '../exports/contexts';

const reducer = (state, action) => {
  switch (action.type) {
    // handle alerts
    case ACTIONS.DISPLAY_ALERT:
      return {
        ...state,
        showAlert: true,
        alertType: 'danger',
        alertText: 'Please provide all values',
      };
    case ACTIONS.CLEAR_ALERT:
      return {
        ...state,
        showAlert: false,
        alertType: '',
        alertText: '',
      };
    // setup user
    case ACTIONS.SETUP_USER_BEGIN:
      return { ...state, isLoading: true };
    case ACTIONS.SETUP_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
        userLocation: action.payload.location,
        jobLocation: action.payload.location,
        showAlert: true,
        alertType: 'success',
        alertText: action.payload.alertText,
      };
    case ACTIONS.SETUP_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.message,
      };
    // toggle sidebar
    case ACTIONS.TOGGLE_SIDEBAR:
      return { ...state, showSidebar: !state.showSidebar };
    // logout user
    case ACTIONS.LOGOUT_USER:
      return {
        ...initialState,
        user: null,
        token: null,
        jobLocation: '',
        userLocation: '',
      };
    default:
      throw new Error(`no such action: ${action.type}`);
  }
};

export { reducer };
