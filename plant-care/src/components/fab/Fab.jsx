import React from 'react';
import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';
import './Fab.css'

function Fab({link}) {
  return (
    <IonFab slot="fixed" vertical="top" horizontal="end" >
      <IonFabButton color="mountain" href={link} >
        <IonIcon icon={add} className='font-style'></IonIcon>
      </IonFabButton>
    </IonFab>
  );
}
export default Fab;