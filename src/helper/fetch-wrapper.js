import { store } from "../redux/store";

export const fetchWrapper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE'),

}


function request(method) {
    return async (url, body) => {
        const configs = {
            method,
            header: authHeader(url)
        };
        if (body) {
            configs.header['Content-Type'] = 'application/json';
            configs.body = JSON.stringify(body);
        }
        return await fetch(url, configs).then(handleResponse)
    }
}
function authHeader(url){
    return 
}

async function handleResponse(response) {
    return await response.text().then(text => {
        const data = text && JSON.parse(text)
        return data
    })
}