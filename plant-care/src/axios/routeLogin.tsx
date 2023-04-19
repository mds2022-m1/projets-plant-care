import Axios from 'axios';
import { LoginDao } from './loginDao.interface';
import { LoginService } from '../pages/logIn/login.interface';

const apiUrl = 'http://localhost:3001/'

const path = "auth/token";

export async function signIn(body: { username: string, password: string }): Promise<LoginService> {
    const answer: LoginDao = await Axios.post(apiUrl + path, body);
    console.log({answer});
    
    return answer.data;
}