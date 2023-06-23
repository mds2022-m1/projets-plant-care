import { IonButton, IonIcon } from "@ionic/react";
import { arrowRedo } from "ionicons/icons";
import './NextButton.css';

const NextButton = ( {nextPage} ) => {

    return (
        <div className="btn-next-container">
        <IonButton href={nextPage} fill='clear'>
            <div className="text-next">Suivant</div>
            <div>
            <IonIcon slot='start' icon={arrowRedo} color='gold' size="large"/>
            </div>
        </IonButton>
        </div>
    )
}

export default NextButton;