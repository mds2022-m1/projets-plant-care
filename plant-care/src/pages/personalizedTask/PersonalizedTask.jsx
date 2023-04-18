import { IonButton, IonContent, IonDatetime, IonDatetimeButton, IonInput, IonLabel, IonModal, IonPage } from '@ionic/react';
import './PersonalizedTask.css';
import HeaderReturn from '../../components/headerReturn/HeaderReturn';
import Select from '../../components/select/Select';
import { create, get, getbyid, getPlantNet } from '../../axios/Route';
import { body } from 'ionicons/icons';
import { useState } from 'react';
import moment from 'moment';

const PersonalizedTask = () => {
const [taskName, setTaskName] = useState("");
const [taskPlantName, setTaskPlantName] = useState("");
const [taskDate, setTaskDate] = useState(moment().format('Y-MM-DD HH:mm:SS') );

const getPlant = () => {
    const plant = [
      {
        name: "Aloe Vera",
        image: "https://www.lesjardinsdegaia.com/1210-large_default/aloe-vera.jpg",
        id: 1
      },
      {
        name: "Cacaoyer",
        image: "https://www.lesjardinsdegaia.com/1210-large_default/aloe-vera.jpg",
        id: 2
      },
    ]
    return plant;
  }

  const arrayPlantName = () => {
    const plant = getPlant();
    const plantName = [];
    plant.map((item) => {
      plantName.push(item.name);
    })
    return plantName;
  }

  const firstPlantName = () => {
    const plant = getPlant();
    return plant[0].name;
  }

  const getZone = () => {
    const zone = [
      {
        name: "Jardin",
        id: 1
      },
      {
        name: "Salon",
        id: 2
      },
      {
        name: "Bureau",
        id: 3
      },
    ]

    return zone;
  }

  const arrayZoneName = () => {
    const zone = getZone();
    const zoneName = [];
    zone.map((item) => {
      zoneName.push(item.name);
    })
    return zoneName;
  }

  const firstZoneName = () => {
    const zone = getZone();
    return zone[0].name;
  }

  const addTask = () => {
    console.log(taskDate  );
    create('tasks', {
      name: taskName,
      lastAction: taskDate,
      uuidPlant:'cf01b828-0f59-445d-8a8a-0bc0a0f9ccc5'
    })
  }
  const getPLantByPlantNet = () => {
    get('https://my.plantnet.org/images/image_1.jpeg')
  }
  const getPlants = () => {
    get('plants')
  }
  const getPlantsUUID = () => {
    getbyid('plants', '59411263-9679-11ed-801b-00d86184e0c2' /*uuid*/)
  }
  const getTasks = () => {
    get('tasks')
  }
  const getTasksUUID = () => {
    getbyid('tasks', '09472732-967a-11ed-801b-00d86184e0c2' /*uuid*/)
  }
  const getUsers = () => {
    get('users')
  }
  const getUsersUUID = () => {
    getbyid('users', '527c2859-a256-44ff-bc2a-d91879a39218' /*uuid*/)
  }
  const getPlaces = () => {
    get('places')
  }
  const getPlacesUUID = () => {
    getbyid('places', '29337279-0ab3-4d7a-bb9e-5da565e19084' /*uuid*/)
  }

  return (
    <IonPage>
      <HeaderReturn pageToReturn="/dashboard" title="Tâche personnalisée" />
      <IonContent>
        <div className='container-form'>
          <IonLabel className='label-form'>Nom de la tâche</IonLabel>
          <IonInput className='custom-input' onBlur={(e) => setTaskName(e.target.value)}></IonInput>
          <IonLabel className='label-form'>Sélectionner la date</IonLabel>
          <IonDatetimeButton datetime="datetime" className="ion-select-date-form" ></IonDatetimeButton>
          <IonModal keepContentsMounted={true}>
            <IonDatetime id="datetime" presentation="date"  onBlur={(e) => setTaskDate(e.target.value)}></IonDatetime>
          </IonModal>
          <IonLabel className='label-form'>Sélectionner votre plante</IonLabel>
          <div className="ion-select-form">
            <Select data={arrayPlantName()} defaultValue={firstPlantName()} handleClick={(e) => setTaskPlantName(e.target.value)} onBlur={(e) => setTaskName(e.target.value)} />
          </div>
        
          <div className='container-button'>
            <IonButton className='button-form' expand="block" fill="clear"  onClick={() => addTask()}>Ajouter</IonButton>
            <IonButton className='button-form' expand="block" fill="clear" href='/dashboard'>Annuler</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PersonalizedTask;
