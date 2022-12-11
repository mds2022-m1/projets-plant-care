import { IonButton, IonHeader, IonToolbar } from '@ionic/react';
import './HeaderReturn.css';

import PlantCareLogo from "../logo/PlantCareLogo";
import FabReturn from '../fabReturn/FabReturn';



const HeaderReturn = ({pageToReturn, title}) => {

  return (
    <>
      <IonHeader>
        <IonToolbar color="gunmetal" className='container-header'>
          <div className='container'>
            <div>
              <FabReturn link={pageToReturn} />
            </div>
            <span className='title'>{title}</span>
            <div className="logo-place">
              <IonButton href="/dashboard" fill="clear" className="button-logo">{PlantCareLogo(38)}</IonButton>
            </div>
          </div>
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default HeaderReturn;
