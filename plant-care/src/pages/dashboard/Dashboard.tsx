import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Dashboard</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Dashboard" />
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Dashboard;
