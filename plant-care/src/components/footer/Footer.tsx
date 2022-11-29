import { IonIcon, IonTabBar, IonTabButton } from '@ionic/react';
import { calendarClear, leaf, planet } from 'ionicons/icons';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/dashboard">
            <IonIcon icon={calendarClear} />
          </IonTabButton>
          <IonTabButton tab="tab2" href="/plants">
            <IonIcon icon={leaf} />
          </IonTabButton>
          <IonTabButton tab="tab3" href="/more">
            <IonIcon icon={planet} />
          </IonTabButton>
        </IonTabBar>
    );
};

export default Footer;
