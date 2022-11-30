import { IonCard, IonCardContent, IonCardHeader, IonCol, IonGrid, IonIcon, IonImg, IonRow } from "@ionic/react";
import { create } from "ionicons/icons";
import React from "react";
import './taskSticker.css';


const TaskSticker = ({task, date, plantName, zone, picture}) => {
    //date = YYYY-MM-DD
    return (
        <>
            <div className="container-sticker">
            <IonCard color="gunmetal">
            <IonGrid>
            <IonCardHeader>
                <IonRow> 
                    <IonCol size={11} class="task"><IonIcon icon={create}></IonIcon>{task}</IonCol>
                    <IonCol size={1}></IonCol>
                </IonRow>
                </IonCardHeader>
                <IonCardContent>
                <IonRow class="ion-align-items-center">
                <div className="contain-picture"><img alt="Image de l'utilisateur" src="assets/image/tulipe.png" className="picture"></img></div>
                <IonCol>
                    <span className="date">{date}</span> <br/>
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