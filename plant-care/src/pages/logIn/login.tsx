import { useState } from "react";

import './LogIn.css';

import { signIn } from '../../axios/routeLogin';
import { LoginService } from "./login.interface";
import { gql, useQuery } from "@apollo/client";
import jwt from 'jwt-decode'
import { useHistory } from 'react-router-dom';

function LoginPage() {

    const history = useHistory();
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
            // const payload = result.access_token.split('.');
            const payload: any = jwt(result.access_token);
            const url = '/afterLogin/' + payload.uuid;
            history.push(url);
            
        }).catch(err => {
            console.error(err);
        });

    };

    const signOut = () => {

        localStorage.removeItem('token');
    }

    const GetUser = gql`
        query GetUser {
            user {
            id
            name
            password
            email
            }
        }
    `;

    function DisplayLocations() {
        const { loading, error, data } = useQuery(GetUser);
      
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error : {error.message}</p>;
      
        return data.user.map(({ id, name, password, email }:any) => (
          <div key={id}>
            <h3>{name}</h3>
            <h3>{password}</h3>
            <br />
            <b>About this location:</b>
            <p>{email}</p>
            <br />
          </div>
        ));
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
            <button onClick={DisplayLocations}>
            DisplayLocations
            </button>
                {/* <IonButton expand="block" fill="clear" href='/dashboard' >Annuler</IonButton> */}
        </form>
    );
}


export default LoginPage;