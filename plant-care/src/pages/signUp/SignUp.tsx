import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './SignUp.css';

const SignUp: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">SignUp</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="SignUp page" />
      </IonContent>
    </IonPage>
  );
};

export default SignUp;
