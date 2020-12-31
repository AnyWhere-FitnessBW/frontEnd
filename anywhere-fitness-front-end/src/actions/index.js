import axios from 'axios';

export const ACTIONS = {
/* LOADING */
    LOADING_START: 'LOADING_START',
    LOADING_END: 'LOADING_END',

/* CLIENT login */
    LOGIN_CLIENT_SUCCESS:'LOGIN_CLIENT_SUCCESS',
    LOGIN_CLIENT_ERROR:'LOGIN_CLIENT_ERROR',

/* INSTRUCTOR login */
    LOGIN_INSTRUCTOR_SUCCESS:'LOGIN_INSTRUCTOR_SUCCESS',
    LOGIN_INSTRUCTOR_ERROR:'LOGIN_INSTRUCTOR_ERROR',

/* ALL USERS fetch */
    GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
    GET_USERS_ERROR: 'GET_USERS_ERROR',

/* LOGOUT */
    USER_LOGOUT: 'USER_LOGOUT',
}

export const loginClient = (clientLoginData) => async (dispatch) => {
    dispatch({
            type: ACTIONS.LOADING_START,
            payload: true
        });
    
    axios
        .post(
            "https://anywhere-fitnessbuild.herokuapp.com/api/client/login", 
            {...clientLoginData}
        )
        .then((response) =>  {
            dispatch({
                type: ACTIONS.LOGIN_CLIENT_SUCCESS,
                payload: response.data
            })
            localStorage.setItem('token', response.data.token)
            console.log('sg: actions - index.js: axios CLIENT LOGIN SUCCESS: ', response)
        })
        .catch((err) => {
            dispatch({
                type: ACTIONS.LOGIN_CLIENT_ERROR,
                payload: err    
            })
            console.error('There was an error logging in this client: ', err.message)
        });

}

export const loginInstructor = (instructorLoginData) => (dispatch) => {
    dispatch({
        type: ACTIONS.LOADING_START,
        payload: true
    });
    axios
    .post(
        "https://anywhere-fitnessbuild.herokuapp.com/api/instructor/login", 
        instructorLoginData
    )
    .then((res) =>  {
        dispatch({
            type: ACTIONS.LOGIN_INSTRUCTOR_SUCCESS,
            payload: {
                message: res.data.message,
                id: res.data.id,
            }
        })
        localStorage.setItem('token', res.data.token)
        console.log('sg: actions - index.js: axios INSTRUCTOR LOGIN SUCCESS: ', res)
    })
    .catch((err) => {
        dispatch({
            type: ACTIONS.LOGIN_INSTRUCTOR_ERROR,
            payload: err   
        })
        console.error('There was an error logging in this instructor: ', err.message)
    });
}

export const getUsers = () => (dispatch) => {
    axios.get('https://anywhere-fitnessbuild.herokuapp.com/api')
        .then(res => {
            dispatch({
                type: ACTIONS.GET_USERS_SUCCESS,
                payload: {
                    all_clients: res.data.clients,
                    all_instructors: res.data.instructors
                }
            })
        })
        .catch(err => {
            dispatch({
                type: ACTIONS.GET_USERS_ERROR,
                payload: err
            })
            console.error('There was an error grabbing ...: ', err)            
        })
}

export const logOut = ()=> (dispatch) => {
    dispatch({
        type: ACTIONS.USER_LOGOUT
    })
    localStorage.removeItem('token');
}
