import { axiosWithAuth } from "../api/axiosWithAuth"

export const GET_CLIENTS_START = 'GET_CLIENTS_START'
export const GET_CLIENTS_SUCCESS = 'GET_CLIENTS_SUCCESS'
export const GET_CLIENTS_FAIL = 'GET_CLIENTS_FAIL'

export const GET_USER_START = 'GET_USER_START'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAIL = 'GET_USER_FAIL'



export const getAllClients = () => (dispatch) => {
    dispatch({
        type: GET_CLIENTS_START
    })
    axiosWithAuth().get('/')
        .then(res => {
            //console.log(res);
            dispatch({
                type: GET_CLIENTS_SUCCESS,
                payload: res.data.clients
            })
        })
        .catch(err => {
            console.error(err)
            dispatch({
                type: GET_CLIENTS_FAIL,
                payload: err.message
            });     
        })
} 

export const getClientUserData = (id) => (dispatch) => {
    dispatch({
        type: GET_USER_START
    })
    axiosWithAuth().get('/')
        .then(res => {
            console.log('getClientUserData success: ', res.data.clients);
            const clientsArr = () => {
                const arr = res.data.clients;
                return arr.find(user => user.id === id)
            }
            dispatch({
                type: GET_USER_SUCCESS,
                payload: clientsArr()
            })
        })
        .catch(err => {
            console.error(err)
            dispatch({
                type: GET_USER_FAIL,
                payload: err.message
            });     
        })
} 

