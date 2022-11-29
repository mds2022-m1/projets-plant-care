import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './PlantPage.css';

const PlantPage: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">PlantPage</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="PlantPage page" />
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default PlantPage;
