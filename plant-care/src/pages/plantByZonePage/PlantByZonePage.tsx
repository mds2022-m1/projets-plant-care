import { IonContent, IonPage } from '@ionic/react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './PlantByZonePage.css';

const PlantByZonePage: React.FC = () => {
    const getParams = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get('zone');
        return myParam;
    };

    return (
        <IonPage>
            <Header />
            {getParams()}
            <Footer />
        </IonPage>
    );
};


export default PlantByZonePage;
