import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import './FabReturn.css'

function FabReturn({link}) {
  return (
    <IonFab slot="fixed" vertical="top" horizontal="start" >
      <IonFabButton color="mountain" href={link} className="button-size">
        <IonIcon icon={arrowBack} className='font-style'></IonIcon>
      </IonFabButton>
    </IonFab>
  );
}
export default FabReturn;