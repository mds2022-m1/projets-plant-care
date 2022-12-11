import { IonButton, IonContent, IonDatetime, IonIcon, IonModal, IonPage } from '@ionic/react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Fab from '../../components/fab/Fab';
import './Dashboard.css';
import Select from '../../components/select/Select';
import TaskSticker from '../../components/taskSticker/taskSticker';
import { calendar, calendarOutline } from 'ionicons/icons';
import { useRef } from 'react';
import TaskStickerToDelete from '../../components/taskStickerToDelete/TaskStickerToDelete';

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
        <Fab link="/personalized-task"/>
        <div className='date-line'>
          <div className="ion-select">
      <Select data={["Aujourd'hui", "Bientôt", "Ce mois-ci"]} defaultValue="Aujourd'hui" handleClick={(e: { target: { value: any; }; }) => console.log(e.target.value)}/>
      </div>
      <IonButton fill="clear" id="open-calender" expand="block"><IonIcon icon={calendar} color="gunmetal"></IonIcon></IonButton>
      </div>
      {/*Open a modal when we click on the icon of the calendar */}
      <IonModal id="example-modal" ref={modal} trigger="open-calender">
        <div className="wrapper">
          <IonDatetime presentation="date"></IonDatetime>
        </div>
      </IonModal>


      <TaskSticker task="arroser" date="2022-11-11" plantName="Tulipe" zone="Chambre" picture="path/to/image"/>
      <TaskSticker task="Tondre la pelouse" date="2022-12-11" plantName="Herbe" zone="Jardin" picture="path/to/image"/>
      <div className='container-line'>
        <div className="line"></div>
        <span className='task-done'>Tâche(s) effectuée(s)</span></div>
    <TaskStickerToDelete task="arroser" date="2022-11-11" plantName="Tulipe" zone="Chambre" picture="path/to/image"/>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Dashboard;
