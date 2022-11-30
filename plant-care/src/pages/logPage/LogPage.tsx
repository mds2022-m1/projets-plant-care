import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './LogPage.css';

const LogPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">LogPage</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="LogPage page" />
      </IonContent>
    </IonPage>
  );
};

export default LogPage;
