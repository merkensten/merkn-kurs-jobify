// imports
import React from 'react';
import axios from 'axios';

// internal imports
import { reducer } from '../exports/contexts/reducers';
import { ACTIONS } from '../exports/contexts/actions';

const token = localStorage.getItem('token');
const userLocation = localStorage.getItem('location');
const user = localStorage.getItem('user');

const initialState = {
  loading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || '',
  jobLocation: userLocation || '',
  showSidebar: false,
};

const apiUrl = import.meta.env.VITE_API_URL;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: ACTIONS.DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: ACTIONS.CLEAR_ALERT });
    }, 3000);
  };

  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    localStorage.setItem('location', location);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('location');
  };

  const setupUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: ACTIONS.SETUP_USER_BEGIN });
    try {
      const { data } = await axios.post(
        apiUrl + `/api/v1/auth/${endPoint}`,
        currentUser
      );
      const { user, token, location } = data;
      dispatch({
        type: ACTIONS.SETUP_USER_SUCCESS,
        payload: { user, token, location, alertText },
      });

      // add user to localStorage
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: ACTIONS.SETUP_USER_ERROR,
        payload: { message: error.response.data.message },
      });
    }
    clearAlert();
  };

  const toggleSidebar = () => {
    dispatch({ type: ACTIONS.TOGGLE_SIDEBAR });
  };

  const logoutUser = () => {
    dispatch({ type: ACTIONS.LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  return (
    <AppContext.Provider
      value={{ ...state, displayAlert, setupUser, toggleSidebar, logoutUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return React.useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
