import { IonContent, IonPage } from '@ionic/react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './SeeYourPlantPage.css';

const SeeYourPlantPage: React.FC = () => {
    const getParams = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get('id');
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


export default SeeYourPlantPage;
