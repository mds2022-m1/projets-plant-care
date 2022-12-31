import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCol, IonGrid, IonIcon, IonImg, IonRow } from "@ionic/react";
import { checkmark, checkmarkCircle, checkmarkCircleOutline, create, time, timeOutline, trash, trashBin } from "ionicons/icons";
import './TaskStickerToDelete.css';
import moment from 'moment';
import 'moment/locale/fr'


const TaskStickerToDelete = ({task, date, plantName, zone, picture, onClick}) => {

    const upperFirstCase = (string) => {
        const arr = string.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const str2 = arr.join(" ");
        return str2;
    }

    const formatDate = (date) => {
        return upperFirstCase(moment(date, 'YYYY-MM-DD').locale('fr').format('DD MMMM YYYY', 'fr'));
    }

    return (
        <>
            <div>
            <IonCard color="gunmetal" className="container-sticker-delete">
            <IonGrid>
            <IonCardContent>
                <IonRow class="ion">
                    
                <div className="contain-picture-delete"><img alt="Image de l'utilisateur" src="assets/image/tulipe.png" className="picture"></img></div>
                <IonCol>
                    <span className="task-to-delete">{task} - {plantName}</span>
                    <span className="date"><IonIcon color="mountain" icon={checkmarkCircle}></IonIcon>Le {formatDate(date)}</span> <br/>
                    </IonCol>
                    <div className="button-delete"><IonButton className="delete-button" fill='clear' onClick={onClick}><IonIcon color="red" icon={trash}></IonIcon></IonButton></div>
                    </IonRow>
                </IonCardContent>
            </IonGrid>
            </IonCard>
            </div>
        </>
    );
}

export default TaskStickerToDelete;