import {  IonContent, IonPage } from '@ionic/react';
import './AddZone.css';
import HeaderReturn from '../../components/headerReturn/HeaderReturn';

const AddZone = () => {

  return (
    <IonPage>
      <HeaderReturn pageToReturn="/plants" title="Choisir une zone" />
      <IonContent>
       
      </IonContent>
    </IonPage>
  );
};

export default AddZone;
