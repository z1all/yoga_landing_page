import {useMock} from "../react-app-env";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {IPrices} from "../types/types";
import {mock} from "./mock-instance";

if (useMock) {
    const pricesList: IPrices[] = [
        {
            tariff: {
                countLessens: 1,
                price: 800
            }
        },
        {
            tariff: {
                countLessens: 4,
                price: 3000
            },
            benefit: {
                countLessens: 1,
                price: 750,
            }
        },
        {
            tariff: {
                countLessens: 12,
                price: 6600
            },
            benefit: {
                countLessens: 1,
                price: 550,
            }
        },
        {
            tariff: {
                countLessens: 8,
                price: 5200
            },
            benefit: {
                countLessens: 1,
                price: 650,
            }
        },
        {
            tariff: {
                countLessens: -1,
                price: 8000
            },
            benefit: {
                countLessens: 1,
                price: -1,
            }
        }
    ]

    mock.onGet('/api/prices').reply(200, pricesList);
}