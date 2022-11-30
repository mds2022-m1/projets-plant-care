import { IonIcon, IonTabBar, IonTabButton } from '@ionic/react';
import { calendarClear, leaf, planet } from 'ionicons/icons';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        
        <IonTabBar slot="bottom" color="gunmetal" >
          <IonTabButton tab="tab1" href="/dashboard">
            <IonIcon icon={calendarClear} color="gold" />
          </IonTabButton>
          <IonTabButton tab="tab2" href="/plants" >
            <IonIcon icon={leaf} color="gold" />
          </IonTabButton>
          <IonTabButton tab="tab3" href="/more">
            <IonIcon icon={planet} color="gold" />
          </IonTabButton>
        </IonTabBar>
    );
};

export default Footer;
