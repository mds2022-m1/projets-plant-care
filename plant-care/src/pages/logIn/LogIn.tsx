import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './LogIn.css';

const LogIn: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">LogIn</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="LogIn page" />
      </IonContent>
    </IonPage>
  );
};

export default LogIn;
