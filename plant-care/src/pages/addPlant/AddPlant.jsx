import './AddPlant.css';
import { IonButton, IonContent, IonInput, IonModal, IonPage, IonToolbar, IonTitle, IonLabel, IonIcon, IonItem } from '@ionic/react';
import { useEffect, useState } from 'react';
import HeaderReturn from '../../components/headerReturn/HeaderReturn';
import NextButton from '../../components/nextButton/NextButton';
import { usePhotoGallery } from '../../hooks/usePhotoGallery';
import { camera } from 'ionicons/icons';



//TODO
// Comment stocker l'image ?
// Installer https://ionicframework.com/docs/angular/your-first-app/taking-photos
// Faire une api avec plantnet pour identifier la plante
// Remplir automatiquement le champ nom de la plante
//... Proposer un lien wiki avec la plante si possible, peut-être ?
// Lorsque l'on clique sur "suivant", il faut un enregistrement en base de données et il faut qu'on puisse récupérer l'id et le transmettre à la page suivante

const AddPlant = () => {

  const [plantName, setPlantName] = useState('');

  const { takePhoto } = usePhotoGallery();

  const getZone = () => {
    const url = window.location.search;
    const idParam = 'zone=';
    const idIndex = url.indexOf(idParam) + idParam.length;
    return decodeURI(url.substr(idIndex));
  };

  const getPhoto = () => {
    return 'https://www.lesjardinsdegaia.com/1040-large_default/monstera-deliciosa.jpg';
  };

  useEffect(() => {
  }, []);

  const showContentPhoto = () => {
    if (false) { // in bdd we got a photo
      return (
        <div className="padding-top-30">
          <img alt="nom de la plante" src="../../../public/assets/image/tulipe.png" className="picture"></img>
        </div>
      )
    } else {
      return (
        <IonButton className="padding-top-30 photo-button" fill='clear' onClick={() => takePhoto()}>
          <div className="empty-round"></div>
          <IonIcon icon={camera} className='position-camera'></IonIcon>
        </IonButton>
      )
    }
  }


  return (
    <IonPage>
      <HeaderReturn pageToReturn="/add-zone" title="Ajouter une plante" />
      <IonContent>
        <div className='container-form padding-top-50'>
          <div><IonLabel className='label-form'>Ajouter une image</IonLabel></div>
          <div>{showContentPhoto()}</div>
          <div className='identify-button'><IonButton className='button-form' color='mountain' size='large' >Identifier la plante</IonButton></div>
          <IonItem counter={true} className='counter-perso'>
            <div className="placeholder-zone-perso">
              <IonInput placeholder="Ajouter le nom de la plante" onChange={(e) => setPlantName(e.target.value)} type="text" minlength={3} maxlength={50}></IonInput>
            </div>
          </IonItem>
          </div>
        <NextButton nextPage={"/add/plant"} />
      </IonContent>
    </IonPage>
  );
};

export default AddPlant;
