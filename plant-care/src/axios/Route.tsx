/* import axios  */
import Axios from 'axios';

const apiUrl = 'http://localhost:3001/'

export async function create(url: string, body: {}) {
    const answer = await Axios.post(apiUrl + url, body)
    return answer.data
}

export async function update(url: string, body: {}) {
    const answer = await Axios.put(apiUrl + url, body)
    return answer.data
}

export async function deleted(url: string, uuid: string ) {
    const answer = await Axios.delete(apiUrl + 'plants/7854a7d7-4fe5-4078-a628-209086ec5a5e')
    return answer.data
}

export async function get(url: string, body: {}) {
    const answer = await Axios.post(apiUrl + url, body)
    return answer.data
}

export async function getbyid(url: string, uuid: string ) {
    const answer = await Axios.delete(apiUrl + 'plants/7854a7d7-4fe5-4078-a628-209086ec5a4e')
    return answer.data
}