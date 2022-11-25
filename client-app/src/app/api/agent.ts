import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = 'http://localhost:7092/api';

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    del: (url: string, body: {}) => axios.delete(url, body).then(responseBody),

}

const Activities = {
    list: () => requests.get('/activities')
}

const agent = {
    Activities
}

export default agent;