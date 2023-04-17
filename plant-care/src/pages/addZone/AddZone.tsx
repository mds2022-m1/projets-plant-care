import { IonButton, IonContent, IonInput, IonModal, IonPage } from '@ionic/react';
import './AddZone.css';
import HeaderReturn from '../../components/headerReturn/HeaderReturn';
import { listZone } from '../../enum/ZoneEnum';
import { FocusEvent, useRef, useState } from 'react';
import Next from '../../components/next/Next';

const AddZone = () => {

  const [zoneSelected, setZoneSelected] = useState<string>('');
  const [canDismiss, setCanDismiss] = useState<boolean>(false);

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
    if (zoneSelected == '') {
      setZoneSelected(zoneName);
      document.getElementById(zoneName)?.classList.toggle('zone-btn-selected');
    } else if (zoneSelected == zoneName) {
      setZoneSelected('');
      document.getElementById(zoneName)?.classList.toggle('zone-btn-selected');
    } else {
      document.getElementById(zoneSelected)?.classList.toggle('zone-btn-selected');
      setZoneSelected(zoneName);
      document.getElementById(zoneName)?.classList.toggle('zone-btn-selected');
    }

    if (zoneName == 'Personnalisée') {
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
        Ajouter une zone personnalisée
        <IonInput placeholder="Nom de la zone" onBlur={(e) => changeZoneSelected(e)}></IonInput>
        <Next />
        <IonButton onClick={() => handleChange()}>Annuler</IonButton>
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
            {zoneSelected == '' ? <div></div> : <Next />}
            {modalPersonnalise()}
          </div>
        </IonContent>
      </IonPage>
    );
  };

  export default AddZone;
