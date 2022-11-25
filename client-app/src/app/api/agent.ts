import axios, { AxiosResponse } from 'axios';
import { Activity } from './../models/activity';

axios.defaults.baseURL = 'http://localhost:7092/api';

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post:<T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T> (url: string, body: {}) => axios.delete<T>(url, body).then(responseBody),

}

const Activities = {
    list: () => requests.get<Array<Activity>>('/activities')
}

const agent = {
    Activities
}

export default agent;