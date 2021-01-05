import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        headers: {
            Authorization: `Bearer ${token}`, 
        },
        baseURL: 'https://anywhere-fitnessbuild.herokuapp.com/'
    })
}


/*
this is another example 

import axios from "axios";
const withAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  });
};
export default withAuth;

*/