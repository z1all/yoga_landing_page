import axiosInstanceFactory from "./axiosInstance";
import {IDirection} from "../types/types";
import {AxiosPromise} from "axios";

const axios = axiosInstanceFactory();

const getDirectionsAsync = async ():  Promise<AxiosPromise<IDirection[]>> => {
    return axios.get<IDirection[]>(`api/directions`);
}

export const api = {
    getDirectionsAsync
}