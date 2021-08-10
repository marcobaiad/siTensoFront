import axios from 'axios'

export const clientAxios = axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
    headers: { Accept: "application/json", "Content-Type": "application/json" }
})