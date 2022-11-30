import { IonCard, IonContent, IonHeader, IonItem, IonList, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './Dashboard.css';
import Select from '../../components/select/Select';
import TaskSticker from '../../components/taskSticker/taskSticker';

const Dashboard: React.FC = () => {  
  return (
    <IonPage>
      <Header />
      <IonContent>
      <Select data={["Aujourd'hui", "Bientôt", "Ce mois-ci"]} defaultValue="Aujourd'hui" handleClick={(e: { target: { value: any; }; }) => console.log(e.target.value)}/>
      <TaskSticker task="arroser" date="11 Novembre 2022" plantName="Tulipe" zone="Chambre" picture="path/to/image"/>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Dashboard;
