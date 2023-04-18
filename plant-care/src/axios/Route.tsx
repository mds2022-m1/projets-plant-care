/* import axios  */
import Axios from 'axios';

const apiUrl = 'http://localhost:3001/'
const apiKeyPlantNet = '2b10YSDLXCzuT6HYUBgJG5znru'

export async function create(url: string, body: {}) {
    const answer = await Axios.post(apiUrl + url, body)
    console.log(answer)
    return answer.data
}

export async function update(url: string, body: {}) {
    const answer = await Axios.put(apiUrl + url, body)
    console.log(answer)
    return answer.data
}

export async function deleted(url: string, uuid: string ) {
    const answer = await Axios.delete(apiUrl + url + '/' + uuid)
    console.log(answer)
    return answer.data
}

export async function get(url: string, body: {}) {
    const answer = await Axios.get(apiUrl + url, body)
    console.log(answer)
    return answer.data
}

export async function getbyid(url: string, uuid: string ) {
    const answer = await Axios.get(apiUrl + url + '/' + uuid)
    console.log(answer)
    return answer.data
}

export async function getPlantNet(urlImage: string) {
    const answer = await Axios.get('https://my-api.plantnet.org/v2/identify/all?images=' + urlImage + '&api-key=' + apiKeyPlantNet )
    console.log(answer)
    return answer.data
}