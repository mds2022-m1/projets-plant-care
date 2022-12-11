import { IonButton, IonContent, IonDatetime, IonDatetimeButton, IonInput, IonLabel, IonModal, IonPage } from '@ionic/react';
import './PersonalizedTask.css';
import HeaderReturn from '../../components/headerReturn/HeaderReturn';
import Select from '../../components/select/Select';

const PersonalizedTask = () => {

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
    console.log("hey");
  }

  return (
    <IonPage>
      <HeaderReturn pageToReturn="/dashboard" title="Tâche personnalisée" />
      <IonContent>
        <div className='container-form'>
          <IonLabel className='label-form'>Nom de la tâche</IonLabel>
          <IonInput className='custom-input'></IonInput>
          <IonLabel className='label-form'>Sélectionner la date</IonLabel>
          <IonDatetimeButton datetime="datetime" className="ion-select-date-form" ></IonDatetimeButton>
          <IonModal keepContentsMounted={true}>
            <IonDatetime id="datetime" presentation="date"></IonDatetime>
          </IonModal>
          <IonLabel className='label-form'>Sélectionner votre plante</IonLabel>
          <div className="ion-select-form">
            <Select data={arrayPlantName()} defaultValue={firstPlantName()} handleClick={(e) => console.log(e.target.value)} />
          </div>
          <IonLabel className='label-form'>Sélectionner la zone</IonLabel>
          <div className="ion-select-form">
            <Select data={arrayZoneName()} defaultValue={firstZoneName()} handleClick={(e) => console.log(e.target.value)} />
          </div>
          <div className='container-button'>
            <IonButton className='button-form' expand="block" fill="clear" href='/dashboard' onClick={() => addTask()}>Ajouter</IonButton>
            <IonButton className='button-form' expand="block" fill="clear" href='/dashboard'>Annuler</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PersonalizedTask;
