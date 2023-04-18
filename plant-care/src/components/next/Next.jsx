import { IonButton, IonIcon } from "@ionic/react";
import { arrowRedo } from "ionicons/icons";
import './Next.css';

const Next = ( nextPage, data ) => {

    return (
        <div className="btn-next-container">
        <IonButton href='/' fill='clear'>
            <div className="text-next">Suivant</div>
            <div>
            <IonIcon slot='start' icon={arrowRedo} color='gold' size="large"/>
            </div>
        </IonButton>
        </div>
    )
}

export default Next;