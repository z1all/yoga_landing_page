import axios, {AxiosInstance} from "axios";
import {} from "../mock/mock-prices"
import {} from "../mock/mock-directions"
import {apiBaseUrl} from "../react-app-env";

const axiosInstanceFactory = (): AxiosInstance => {
    const instance: AxiosInstance = axios.create({
        baseURL: apiBaseUrl
    });

    return instance;
};

export default axiosInstanceFactory;