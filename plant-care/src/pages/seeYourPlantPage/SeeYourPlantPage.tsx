import { IonAccordion, IonAccordionGroup, IonContent, IonItem, IonLabel, IonPage, IonTitle } from '@ionic/react';
import { useEffect, useState } from 'react';
import FabReturn from '../../components/fabReturn/FabReturn';
import './SeeYourPlantPage.css';

const SeeYourPlantPage: React.FC = () => {
    const getId = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get('id');
        return myParam;
    };

    const [plant, setPlant] = useState<Plant>({} as Plant);
    const [tasks, setTasks] = useState<Task[]>([]);

    type Plant = {
        id: number;
        name: string;
        picture: string;
        zone: string;
    }

    useEffect(() => {
        const plant = getMyPlant();
        setPlant(plant);

        const tasks = getTaskFromId();
        setTasks(tasks);
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

    const taskList = () => {
        return 'Contenu de la liste des tâches';
    }

    const noteList = () => {
        return 'Liste des notes';
    }

    const linkToEdit = () => {
        return `/edit/plant?id=${getId}`;
    }

    type Task = {
        uuidPlant: number;
        name: string;
        frequencyType: string;
        lastAction: Date;
        month: string;
        actionFrequency: number;
    }

    const getTaskFromId = () => {

        const task = [{
            uuidPlant: 1,
            name: "Arroser",
            frequencyType: "Jour",
            lastAction: new Date(),
            month: "Janvier-Février-Mars-Avril",
            actionFrequency: 1
        },
        {
            uuidPlant: 2,
            name: "Rempoter",
            frequencyType: "Année",
            lastAction: new Date(),
            month: "",
            actionFrequency: 3
        }];

        return task;
    }

    return (
        <IonPage>
            <IonContent>
                <div className='content-your-plant'>
                    <div className='header-your-plant'>
                        <FabReturn link="/plants" />
                        <a className='material-icons icon-edit' href={linkToEdit()}>&#xe745;</a>
                    </div>
                    <div className='body-your-plant'>
                        <div className="contain-picture-your-plant">
                            <img alt={plant.name} src={plant.picture} className="picture"></img>
                        </div>
                        <IonTitle className='title-your-plant'>{plant.name}</IonTitle>
                        <div className="line-your-plant"></div>
                        <IonAccordionGroup expand="inset" className="ion-accordion">
                            <IonAccordion value="first">
                                <IonItem slot="header" color="mountain">
                                    <IonLabel>Liste des tâches</IonLabel>
                                </IonItem>
                                <div className="ion-padding" slot="content">
                                    {taskList()}
                                </div>
                            </IonAccordion>
                            <IonAccordion value="second">
                                <IonItem slot="header" color="mountain">
                                    <IonLabel>Mes notes</IonLabel>
                                </IonItem>
                                <div className="ion-padding" slot="content">
                                    {noteList()}
                                </div>
                            </IonAccordion>
                        </IonAccordionGroup>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};


export default SeeYourPlantPage;
