import { IonButton, IonLabel, IonPage, IonContent, IonInput } from '@ionic/react';
import { useEffect, useState } from 'react';
import FabReturn from '../../components/fabReturn/FabReturn';
import HeaderReturn from '../../components/headerReturn/HeaderReturn';
import './EditYourPlantPage.css';
import Select from '../../components/select/Select';
import { listZone } from '../../enum/ZoneEnum';

//To handle photo : https://ionicframework.com/docs/native/camera
//https://ionicframework.com/docs/vue/your-first-app/taking-photos

const EditYourPlantPage: React.FC = () => {
    const getId = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get('id');
        return myParam;
    };

    const [plant, setPlant] = useState<Plant>({} as Plant);

    const [createNewZone, setCreateNewZone] = useState<boolean>(false);

    const [zoneName, setZoneName] = useState<string>("");

    type Plant = {
        id: number;
        name: string;
        picture: string;
        zone: string;
    }

    useEffect(() => {
        const plant = getMyPlant();
        setPlant(plant);
        setZoneName(listZone[0].name)
    }, []);

    const getMyPlant = () => {
        const id = getId();
        //const plant = getPlant(id);
        const plant = {
            id: 1,
            name: "Tulipe",
            picture: "assets/image/tulipe.png",
            zone: "Chambre"
        }
        return plant;
    }

    const linkReturn = () => {
        return `/plant?id=${getId()}`;
    }

    const arrayZoneName = () => {
        const array = listZone.map((zone) => {
            return zone.name;
        });
        return array;
    }

    const handleZone = (zone: string) => {
        if (zone === "Personnalisée") {
            setZoneName("Personnalisée")
            setCreateNewZone(true);
        } else {
            setZoneName(zone);
            setCreateNewZone(false);
        }
    }

    return (
        <IonPage>
            <IonContent>
            <HeaderReturn pageToReturn={linkReturn()} title="Modifier la plante" />
            <div className='container-form-edit'>
                <IonLabel className='label-form'>Nom de la plante</IonLabel>
                <IonInput className='custom-input' onBlur={(e: any) => console.log(e.target.value)}></IonInput>
                <IonLabel className='label-form'>Nom de la zone</IonLabel>
                <div className="ion-select-form">
                    <Select data={arrayZoneName()} defaultValue={zoneName} handleClick={(e: any) => handleZone(e.target.value)} />
                </div>
                {createNewZone ? <IonInput className='custom-input' onBlur={(e: any) => console.log(e.target.value)}></IonInput> : null}
                <div className="contain-picture-edit">
                    <img alt={plant.name} src={plant.picture} className="picture"></img>
                </div>
                <IonButton fill='clear' className='large-button'>Modifier la photo</IonButton>
                <IonButton fill='clear' className='button-form'>Sauvegarder</IonButton>
                <IonButton fill='clear' className='button-form background-red'>Supprimer la plante</IonButton>

            </div>
            </IonContent>
        </IonPage>
    );
};


export default EditYourPlantPage;
