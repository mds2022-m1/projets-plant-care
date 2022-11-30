import { IonButton, IonButtons, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { menu } from 'ionicons/icons';
import './Header.css';

import { useRef } from 'react';
import PlantCareLogo from "../logo/PlantCareLogo";



const Header: React.FC = () => {

  const modal = useRef<HTMLIonModalElement>(null);

  function dismiss() {
    modal.current?.dismiss();
  }

  return (
    <>
      <IonHeader>
        <IonToolbar color="gunmetal">
          <div className='container'>
            <div>
              <IonButton fill="clear" id="open-custom-dialog"><IonIcon icon={menu} color="gold" /></IonButton>
            </div>
            <div className="logo-place">
              {PlantCareLogo(50)}
            </div>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonModal id="example-modal" ref={modal} trigger="open-custom-dialog">
        <div className="wrapper">
          <h1>Plant'Care</h1>
          <IonList lines="none">
            <IonItem button={true} detail={false} onClick={dismiss}>
              <IonLabel>Se deconnecter</IonLabel>
            </IonItem>
            <IonItem button={true} detail={false} onClick={dismiss}>
              <IonLabel>RGPD</IonLabel>
            </IonItem>
            <IonItem button={true} detail={false} onClick={dismiss}>
              <IonLabel>Contact</IonLabel>
            </IonItem>
          </IonList>
        </div>
      </IonModal>
    </>
  );
};

export default Header;
