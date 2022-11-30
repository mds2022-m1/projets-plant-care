import { IonContent, IonHeader, IonItem, IonList, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
      <IonList>
      <IonItem>
        <IonSelect interface="popover" value="today" >
        <IonSelectOption value="today">Aujourd'hui</IonSelectOption>
          <IonSelectOption value="nextDay">Bientôt</IonSelectOption>
          <IonSelectOption value="month">Ce mois-ci</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Dashboard;
