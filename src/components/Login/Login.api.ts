import Axios, {AxiosRequestConfig} from "axios";
import {apiUrl} from "../../config/api";

export interface  Credentials {
    email: string;
    pwd: string;
}

export const onLogin = async (data: Credentials) => {
    const requestConfig: AxiosRequestConfig = {
        method: 'post',
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Origin': `${apiUrl}`,
        },
        url: `${apiUrl}/auth/login`,
        withCredentials: true,
        data,
    }

    try {
        const {data: response} = await Axios.request(requestConfig);
        return response;
    } catch (e) {
        console.error(e);
        return {error: (e as Error).message}
    }
}

export const onRegister = async (data: Credentials) => {
    const requestConfig: AxiosRequestConfig = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Origin': `${apiUrl}`,
        },
        url: `${apiUrl}/user/register`,
        withCredentials: true,
        data,
    }

    try {
        const {data: response} = await Axios.request(requestConfig);
        return response;
    } catch (e) {
        console.error(e)
        return {error: (e as Error).message}
    }

}

export const onCheck = async () => {
    const requestConfig: AxiosRequestConfig = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': `${apiUrl}`,
        },
        url: `${apiUrl}/auth/check`,
        withCredentials: true,
    }

    try {
        const {data: response} = await Axios.request(requestConfig);
        return response;
    } catch (e) {
        console.error(e)
        return {error: (e as Error).message}
    }

}

export const onLogout = async () => {
    const requestConfig: AxiosRequestConfig = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': `${apiUrl}`,
        },
        url: `${apiUrl}/auth/logout`,
        withCredentials: true,
    }

    try {
        const {data: response} = await Axios.request(requestConfig);
        return response;
    } catch (e) {
        console.error(e)
        return {error: (e as Error).message}
    }

}