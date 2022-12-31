import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCol, IonGrid, IonIcon, IonRow } from "@ionic/react";
import { checkmarkCircleOutline, create, timeOutline } from "ionicons/icons";
import moment from 'moment';
import 'moment/locale/fr'
import './taskSticker.css';


const TaskSticker = ({task, date, plantName, zone, picture, onClick}) => {

    const formatDate = (date) => {
        return upperFirstCase(moment(date, 'YYYY-MM-DD').locale('fr').format('DD MMMM YYYY', 'fr'));
    }

    const upperFirstCase = (string) => {
        const arr = string.split(" ");
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const str2 = arr.join(" ");
        return str2;
    }

    const isLate = (date) => {
        const today = moment().format('YYYY-MM-DD');
        return date < today;
    }

    const showLate = () => {
        if (isLate(date)) {
            return (
                <span className="late">
                    <IonIcon color="purple" icon={timeOutline} fill="clear"></IonIcon>En retard
                </span>
            )
        }
    }
    //date = YYYY-MM-DD
    return (
        <>
            <div className="container-sticker">
            <IonCard color="gunmetal">
            <IonGrid>
            <IonCardHeader>
                <IonRow> 
                    <IonCol size={11} class="task"><IonIcon icon={create}></IonIcon>{task}</IonCol>
                    <IonCol size={1} className="check-mark"><IonButton fill="clear" className="click-checkmark" onClick={onClick}><IonIcon color="mountain" icon={checkmarkCircleOutline}></IonIcon></IonButton></IonCol>
                </IonRow>
                </IonCardHeader>
                <IonCardContent>
                <IonRow class="ion">
                <div className="contain-picture"><img alt="Image de l'utilisateur" src="assets/image/tulipe.png" className="picture"></img></div>
                <IonCol>
                    <span className="date">{formatDate(date)}</span>{showLate()} <br/>
                    <span className='plant-name'>{plantName}</span> <br/>
                    <div className="zone">Zone : {zone}</div> <br/>
                    </IonCol>
                    </IonRow>
                </IonCardContent>
            </IonGrid>
            </IonCard>
            </div>
        </>
    );
}

export default TaskSticker;