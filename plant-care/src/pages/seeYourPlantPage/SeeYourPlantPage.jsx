import { IonButton, IonAccordion, IonAccordionGroup, IonContent, IonItem, IonLabel, IonPage, IonTitle } from '@ionic/react';
import { useEffect, useState } from 'react';
import FabReturn from '../../components/fabReturn/FabReturn';
import FrequencyTaskSticker from '../../components/frequencyTaskSticker/FrequencyTaskSticker';
import './SeeYourPlantPage.css';
import { create, get, getbyid, getPlantNet } from '../../axios/Route';

const SeeYourPlantPage = () => {
    const getId = () => {
        const url = window.location.search;
        const idParam = 'id=';
        const idIndex = url.indexOf(idParam) + idParam.length;
        console.log(url.substr(idIndex))
        return url.substr(idIndex);
      };

    const [plant, setPlant] = useState({});
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const plant = getbyid('plants', getId()).then(res => {
            console.log(res)
            const data = {
                id:res.uuid,
                name:res.name,
                note:res.note,
                picture:res.picture,
            }
            setPlant(data)
        });

        setPlant(plant);

        const tasks = getTaskFromId();
        setTasks(tasks);
    }, []);

    const getMyPlants = () => {
        console.log(plant)
        return plant;
      };



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

    const getTaskFromId = () => {

        const task = [{
            uuidPlant: 1,
            name: "Arroser",
            frequencyType: "jours",
            lastAction: new Date(),
            month: "Janvier - Février - Mars - Avril",
            actionFrequency: 1
        },
        {
            uuidPlant: 1,
            name: "Rempoter",
            frequencyType: "ans",
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
                        <div className='title-your-plant'>{plant.name}</div>
                        <div className="line-your-plant"></div>
                        <IonAccordionGroup expand="inset" className="ion-accordion">
                            <IonAccordion value="first">
                                <IonItem slot="header" color="mountain">
                                    <IonLabel>Liste des tâches</IonLabel>
                                </IonItem>
                                <div className="ion-padding" slot="content">
                                    {getTaskFromId().map((task) => {
                                        return (
                                        <FrequencyTaskSticker name={task.name} frequencyType={task.frequencyType} lastAction={task.lastAction} month={task.month} actionFrequency={task.actionFrequency} onClick={(e:any) => console.log(e)} taskId={task.uuidPlant} key={task.uuidPlant + task.name}/>
                                        )
                                    })
                                    }
                                    Ajouter une tâche
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
