import { Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import LogPage from './pages/logPage/LogPage';
import SignUp from './pages/signUp/SignUp';
import PlantPage from './pages/plantPage/PlantPage';
import Dashboard from './pages/dashboard/Dashboard';
import LastPage from './pages/lastPage/LastPage';
import PersonalizedTask from './pages/personalizedTask/PersonalizedTask';
import AddZone from './pages/addZone/AddZone';
import PlantByZonePage from './pages/plantByZonePage/PlantByZonePage';
import SeeYourPlantPage from './pages/seeYourPlantPage/SeeYourPlantPage';
import EditYourPlantPage from './pages/editYourPlantPage/EditYourPlantPage';
import LoginPage from './pages/logIn/login';

setupIonicReact();

const isAuthed = true;

/* Don't forget to allow the access of some pages only if auth */
const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/log">
          <LogPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/plants">
          <PlantPage />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/more">
          <LastPage />
        </Route>
        <Route path="/personalized-task">
          <PersonalizedTask />
        </Route>
        <Route path="/add-zone">
          <AddZone />
        </Route>
        <Route path="/zone/plants">
          <PlantByZonePage />
        </Route>
        <Route path="/plant">
          <SeeYourPlantPage />
        </Route>
        <Route path='/edit/plant'>
          <EditYourPlantPage />
        </Route>
        <Route exact path="/">
          <Route
            exact
            path="/"
            render={() => {
              return isAuthed ? <Dashboard /> : <LogPage />;
            }}
          />          </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
