import Axios, {AxiosRequestConfig} from "axios";

export interface  Credentials {
    email: string;
    pwd: string;
}

export const onLogin = async (data: Credentials) => {
    const requestConfig: AxiosRequestConfig = {
        method: 'post',
        headers: {"Content-Type": "application/json"},
        url: 'http://localhost:3001/auth/login',
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
        headers: {"Content-Type": "application/json"},
        url: 'http://localhost:3001/user/register',
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

export const onLogout = async () => {
    const requestConfig: AxiosRequestConfig = {
        method: 'GET',
        headers: {"Content-Type": "application/json"},
        url: 'http://localhost:3001/auth/logout',
    }

    try {
        const {data: response} = await Axios.request(requestConfig);
        return response;
    } catch (e) {
        console.error(e)
        return {error: (e as Error).message}
    }

}