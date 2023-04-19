import { IonButton, IonLabel, IonPage, IonContent, IonInput } from '@ionic/react';
import { useEffect, useState } from 'react';
import FabReturn from '../../components/fabReturn/FabReturn';
import HeaderReturn from '../../components/headerReturn/HeaderReturn';
import './afterLogin.css';
import { gql, useQuery } from '@apollo/client';
import { search } from 'ionicons/icons';

//To handle photo : https://ionicframework.com/docs/native/camera
//https://ionicframework.com/docs/vue/your-first-app/taking-photos


//Cette page à été créer spécialement pour le cours de graphQL
const AfterLogin: React.FC = () => {

    const GetUser = gql`
        query GetUser($uuid: uuid!) {
            User (where: {id: {_eq: $uuid}}) {
            id
            name
            password
            email
            }
        }
    `;

    function GetUserLogged() {
        const uuid = window.location.pathname.split("/")[2];

        console.log({uuid})
        const { loading, error, data } = useQuery(GetUser, {
            variables: { uuid: uuid },
        });

        if (loading) return null;
        if (error) return `Error! ${error}`;

        return data.User.map(({ id, name, password, email }: any) => (
            <div key={id}>
                <h3>{name}</h3>
                <h3>{password}</h3>
                <br />
                <p>{email}</p>
                <br />
            </div>
        ));
    }


    return (
        <IonPage>
            <IonContent>
                <GetUserLogged />
            </IonContent>
        </IonPage>
    );
};


export default AfterLogin;
