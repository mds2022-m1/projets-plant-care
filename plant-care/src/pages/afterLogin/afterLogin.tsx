import { IonButton, IonLabel, IonPage, IonContent, IonInput } from '@ionic/react';
import { useEffect, useState } from 'react';
import FabReturn from '../../components/fabReturn/FabReturn';
import HeaderReturn from '../../components/headerReturn/HeaderReturn';
import './afterLogin.css';
import { gql, useMutation, useQuery } from '@apollo/client';
import { search } from 'ionicons/icons';


//To handle photo : https://ionicframework.com/docs/native/camera
//https://ionicframework.com/docs/vue/your-first-app/taking-photos


//Cette page à été créer spécialement pour le cours de graphQL
const AfterLogin: React.FC = () => {


    // Moyen bête et méchant de récupérer l'uuid de mon user via l'url
    const [userUuid, setUserUuid] = useState<string>(window.location.pathname.split("/")[2]);

    // Query pour voir les info de mon user avec une clause where
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

    // Mutation pour modifier mon user
    const SetUser = gql`
    mutation SetUser($uuid: uuid!) {
        setUser(uuid: $uuid) {
            id
            type
            }
        }
    `;

    //Mutation pour ajouter une Place
    const CreatePlace = gql`
    mutation CreatePlace(
        $name: String!
        $userUuid: uuid!
        ) {
        insert_Place_one(
            object: {

                name: $name,
                userUuid: $userUuid
            }          
        ) {
          name
          userUuid
        }
      }
    `;

    const AddPlace = () => {
        const [formState, setFormState] = useState({
            name: ''
        });

        console.log("Je créer une place avec le nom : ");
        console.log(formState.name);

        const [createPlace] = useMutation(CreatePlace, {
            variables: {
                name: formState.name,
                userUuid: userUuid
            }
        });

        return (
            <div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        AddPlace()
                    }}
                >
                    <div className="flex flex-column mt3">
                        <input
                            className="mb2"
                            value={formState.name}
                            onChange={(e) =>
                                setFormState({
                                    ...formState,
                                    name: e.target.value
                                })
                            }
                            type="text"
                            placeholder="Nom de la place"
                        />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    };

// Permet d'afficher les infos de mon user, le nom est moche mais pas grave :D
    function GetUserLogged() {

        const { loading, error, data } = useQuery(GetUser, {
            variables: { uuid: userUuid },
        });

        if (loading) return null;
        if (error) return `Error! ${error}`;

        return data.User.map(({ id, name, password, email }: any) => (
            <div key={userUuid}>

                <h3>Uuid du user : {userUuid}</h3>
                <h3>Nom du user : {name}</h3>
                <h3>Son mot de passe : {password}</h3>
                <h3>Son email : {email}</h3>
            </div>
        ));
    }

    //     function SetUserLogged() {
    //         const uuid = window.location.pathname.split("/")[2];

    //         let input: any;
    //         const [setUserTest, { data, loading, error }] = useMutation(SetUser);

    //         console.log({ uuid })
    //         const { loading, error, data } = useQuery(SetUser, {
    //             variables: { uuid: uuid },
    //         });

    //         if (loading) return null;
    //         if (error) return `Error! ${error}`;

    //         return (
    //             <div>
    //                 <form
    //                     onSubmit={e => {
    //                         e.preventDefault();
    //                         setUserTest({ variables: { type: input.value } });
    //                         input.value = '';
    //                     }}
    //                 >
    //                     <input
    //                         ref={node => {
    //                             input = node;
    //                         }}
    //                     />
    //                     <button type="submit">Add Todo</button>
    //                 </form>
    //             </div>
    //         );
    //     }
    // }
    

    return (
        <>

            <IonPage>
                <IonContent>
                    <br />
                    <div>
                        <IonLabel>Voir les informations de l'utilisateur connecté</IonLabel>
                        <br />
                    </div>
                    <GetUserLogged />
                    <br />
                    <IonLabel>Input pour l'ajout d'une place</IonLabel>
                    <br />
                    <AddPlace />
                </IonContent>
            </IonPage>
        </>
    );
};


export default AfterLogin;
