import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        headers: {
            Authorization: `Bearer ${token}`, 
        },
        baseURL: 'https://anywhere-fitnessbuild2.herokuapp.com/'
    })
}

export default axiosWithAuth;
// import axios from "axios";
// const withAuth = () => {
//   const token = localStorage.getItem("token");
//   return axios.create({
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: token
//     }
//   });
// };
// export default withAuth;
