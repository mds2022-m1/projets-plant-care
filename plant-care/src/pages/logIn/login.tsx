import { useState } from "react";

import './LogIn.css';

import { signIn } from '../../axios/routeLogin';
import { LoginService } from "./login.interface";

function LoginPage() {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const submitHandler = (event: any) => {
        event.preventDefault();
        console.log({ password });
        const body = {
            username: email
            , password: password
        }

        signIn(body).then((result: LoginService) => {
            console.log({ result })

            localStorage.setItem('token', result.access_token);

        }).catch(err => {
            console.error(err);
        });

    };

    const signOut = () => {

        localStorage.removeItem('token');
    }

    return (
        <form onSubmit={submitHandler} >
            <div>
                <label>
                    email :
                    <input
                        type="email"
                        id="user-name"
                        name="user-name"
                        autoComplete="on"
                        placeholder="Username or E-mail"
                        onBlur={(e: any) => setEmail(e.target.value)}
                    ></input>
                </label>
            </div>

            <div>
                <label>
                    password :
                    <input
                        type="password"
                        id="user-password"
                        name="user-password"
                        autoComplete="off"
                        placeholder="Password"
                        onBlur={(e: any) => setPassword(e.target.value)}
                    ></input>
                </label>
            </div>
            <input type="submit" value="Envoyer" />
            <button onClick={signOut}>
                Deconnexion
            </button>
        </form>
    );
}


export default LoginPage;