import { IonButton, IonContent, IonInput, IonModal, IonPage, IonToolbar, IonTitle, IonItem } from '@ionic/react';
import './AddZone.css';
import HeaderReturn from '../../components/headerReturn/HeaderReturn';
import { listZone } from '../../enum/ZoneEnum';
import { FocusEvent, useRef, useState } from 'react';
import NextButton from '../../components/nextButton/NextButton';


//TODO : ajout check input
// empecher de fermer la modal quand on clique en dehors

const AddZone = () => {

  const [zoneSelected, setZoneSelected] = useState<string>('');

  const zones = () => listZone.map((zone) => {
    return (
      <IonButton className="zone-btn" fill='clear' key={zone.name} id={zone.name} onClick={() => showZoneSelected(zone.name)}>
        <div>
          <i className={zone.className}>{zone.iconName}</i>
          <div className="zone-txt">{zone.name}</div>
        </div>
      </IonButton>
    );
  });

  const showZoneSelected = (zoneName: string) => {
    if (zoneSelected === '') {
      setZoneSelected(zoneName);
      document.getElementById(zoneName)?.classList.toggle('zone-btn-selected');
    } else if (zoneSelected === zoneName) {
      setZoneSelected('');
      document.getElementById(zoneName)?.classList.toggle('zone-btn-selected');
    } else {
      document.getElementById(zoneSelected)?.classList.toggle('zone-btn-selected');
      setZoneSelected(zoneName);
      document.getElementById(zoneName)?.classList.toggle('zone-btn-selected');
    }

    if (zoneName === 'Personnalisée') {
      handleChange();
    }
  };

  const changeZoneSelected = (e: any) => {
    setZoneSelected(e.target.value);
    console.log(e.target.value)
  }

  const modal = useRef<HTMLIonModalElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = () => {
    setIsOpen(!isOpen);
  }

  const modalPersonnalise = () => {
    return (
      <IonModal id="modal-zone-perso" isOpen={isOpen}>
        <div className="">
          <IonToolbar color='gunmetal'>
            <IonTitle color='gold' className='title-zone-perso'>
              Ajouter une zone personnalisée
            </IonTitle>
          </IonToolbar>

          <IonItem counter={true} className='counter-perso'>
            <div className="placeholder-zone-perso">
              <IonInput placeholder="Nom de la zone" onChange={(e) => changeZoneSelected(e)} type="text" minlength={3} maxlength={20}></IonInput>
            </div>
          </IonItem>
          <div className="content-btn-add-zone">
            <IonButton onClick={() => handleChange()} className='button-form btn-cancel' color='mountain'>Annuler</IonButton>
            <NextButton nextPage={"/add/plant?zone=" + zoneSelected} />
          </div>
        </div>
      </IonModal>
    )
  }

  return (
    <IonPage>
      <HeaderReturn pageToReturn="/plants" title="Choisir une zone" />
      <IonContent>
        <div className='zone-ctnr'>
          {zones()}
          {zoneSelected === '' || zoneSelected === 'Personnalisée' ? <div></div> : <NextButton nextPage={"/add/plant?zone=" + zoneSelected} />}
          {modalPersonnalise()}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AddZone;
