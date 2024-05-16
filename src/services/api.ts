import axiosInstanceFactory from "./axiosInstance";
import {IDirection, IPrices} from "../types/types";
import {AxiosPromise} from "axios";

const axios = axiosInstanceFactory();

const getDirectionsAsync = async ():  Promise<AxiosPromise<IDirection[]>> => {
    return axios.get<IDirection[]>(`api/directions`);
}

const getPricesAsync = async ():  Promise<AxiosPromise<IPrices[]>> => {
    return axios.get<IPrices[]>(`api/prices`);
}
export const api = {
    getDirectionsAsync,
    getPricesAsync
}