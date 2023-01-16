import React from 'react';
import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';

function FabAddPlant({link}) {
  return (
    <IonFab slot="fixed" vertical="bottom" horizontal="center" >
      <IonFabButton color="mountain" href={link} >
        <IonIcon icon={add} className='font-style'></IonIcon>
      </IonFabButton>
    </IonFab>
  );
}
export default FabAddPlant;