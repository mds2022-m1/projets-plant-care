import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { menu } from 'ionicons/icons';
import './Header.css';

import { personCircle } from 'ionicons/icons';
import { useRef } from 'react';



const Header: React.FC = () => {

  const modal = useRef<HTMLIonModalElement>(null);

  function dismiss() {
    modal.current?.dismiss();
  }
  
    return (
<>
        <IonHeader>
          <IonToolbar color="gunmetal">
          <IonButton fill="clear" id="open-custom-dialog"><IonIcon icon={menu} color="gold" /></IonButton>
          </IonToolbar>
          <IonImg src="../../../public/assets/logo/plant-care-logo.svg"></IonImg>
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
