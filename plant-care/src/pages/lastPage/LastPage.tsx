import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './LastPage.css';

const LastPage: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">LastPage</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="LastPage page" />
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default LastPage;
