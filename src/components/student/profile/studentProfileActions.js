import axios from "axios";
import history from '../../../history.js';
import { backendUrl } from "../../../config/urls.js";
import { logout } from "../../../auth/authActions.js";

export const FETCH_PROFILE = "FETCH_PROFILE";
export const FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS";
export const FETCH_PROFILE_FAILURE = "FETCH_PROFILE_FAILURE";

export const getData = id => dispatch => {
  const headers = {
    authorization: localStorage.getItem("backendToken")
  };
  return axios
    .get(`${backendUrl}/api/students/profile${id ? `/${id}` : ""}`, {
      headers
    })
    .then(res => res.data)

    .then(profile =>
      dispatch({
        type: FETCH_PROFILE_SUCCESS,
        payload: profile
      })
    )
    .catch(err =>
      dispatch({
        type: FETCH_PROFILE_FAILURE,
        payload: err.res
      })
    );
};

export const deleteStudent = () => dispatch => {
  const token = localStorage.getItem("backendToken");
  history.push('/loading');
  axios
    .delete(`${backendUrl}/api/students/delete`, {
      headers: { authorization: token }
    })
    .then(res => {
      console.log("axios delete was successful", backendUrl);
      dispatch(logout());
    })
    .catch(err => {
      console.log(err);
    });
};
