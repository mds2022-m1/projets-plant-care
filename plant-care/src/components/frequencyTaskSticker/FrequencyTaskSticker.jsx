import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonModal, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { close, create } from "ionicons/icons";
import moment from 'moment';
import 'moment/locale/fr'
import { useState } from "react";
import HandleTask from "../handleTask/HandleTask";
import './FrequencyTaskSticker.css';

const sentenceFrequency = (frequencyType, actionFrequency) => {
    if (actionFrequency === 1) {
        return 'Tous les ' + frequencyType;
    }
    if (frequencyType === 'semaines') {
        return 'Toutes les ' + actionFrequency + ' semaines';
    }
    return 'Tous les ' + actionFrequency + ' ' + frequencyType;
}

const listMonth = (month) => {
    if (month.length === 0) {
        return 'Toute l\'année';
    }
    return (month);
}

const nextAction = (lastAction) => {
    return ('Prochaine date : ' + moment(lastAction).format('DD/MM/YYYY'));
}

const FrequencyTaskSticker = ({ name, frequencyType, lastAction, month, actionFrequency, onClick, taskId }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = () => {
        setIsOpen(!isOpen);
    }

    const data = {
        name: name,
        frequencyType: frequencyType,
        lastAction: lastAction,
        month: month,
        actionFrequency: actionFrequency,
        taskId: taskId,
        type: 'edit'
    }

    return (
        <>
            <button onClick={() => handleChange()} className="task-frequency-container">
                <div className="task-frequency-space">
                    <div className="task-frequency-name">{name}</div>
                    <div className="task-frequency">{sentenceFrequency(frequencyType, actionFrequency)}</div>
                </div>
                <div className="task-frequency-middle">
                    <div className="task-frequency-month">{listMonth(month)}</div>
                </div>
                <div className="task-frequency-space">
                    <div className="task-frequency">{nextAction(lastAction)}</div>
                    <IonIcon icon={create} className='icon'></IonIcon>
                </div>
            </button>
            {isOpen ? <HandleTask data={data} onClick={() => handleChange()} /> : null}
            
        </>
    );
}

export default FrequencyTaskSticker;