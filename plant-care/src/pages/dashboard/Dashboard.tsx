import { IonButton, IonCard, IonContent, IonDatetime, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonModal, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './Dashboard.css';
import Select from '../../components/select/Select';
import TaskSticker from '../../components/taskSticker/taskSticker';
import { calendar, calendarOutline } from 'ionicons/icons';
import { useRef } from 'react';

const Dashboard: React.FC = () => {

  const calendarModal = () => {
  }

  const modal = useRef<HTMLIonModalElement>(null);

  function dismiss() {
    modal.current?.dismiss();
  }

  return (
    <IonPage>
      <Header />
      <IonContent>
      <Select data={["Aujourd'hui", "Bientôt", "Ce mois-ci"]} defaultValue="Aujourd'hui" handleClick={(e: { target: { value: any; }; }) => console.log(e.target.value)}/>
      <IonButton fill="clear" id="open-calender" expand="block"><IonIcon icon={calendar} color="gunmetal"></IonIcon></IonButton>
      {/*Open a modal when we click on the icon of the calendar */}
      <IonModal id="example-modal" ref={modal} trigger="open-calender">
        <div className="wrapper">
          <IonDatetime presentation="date"></IonDatetime>
        </div>
      </IonModal>


      <TaskSticker task="arroser" date="2022-11-11" plantName="Tulipe" zone="Chambre" picture="path/to/image"/>
      <TaskSticker task="Tondre la pelouse" date="2022-12-11" plantName="Herbe" zone="Jardin" picture="path/to/image"/>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Dashboard;
