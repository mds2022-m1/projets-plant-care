import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './LogIn.css';

import { useState, useEffect } from 'react';
import { supabase } from './client';
import { cogSharp } from 'ionicons/icons';

function LogIn() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    checkUser();
    window.addEventListener('hashchange', function() {
    checkUser();
    });
  }, [])
  async function checkUser() {
    const token = localStorage.getItem("sb-ebamkhaelqkqphvbufuv-auth-token")
    const user = await supabase.auth.getUser(token.provider_token);
    setUser(user.data.user);
  } 
  async function signInWithGithub() {
    await supabase.auth.signInWithOAuth({
      provider: 'github'
    });
  }
  async function signOut() {
    await supabase.auth.signOut();
    setUser(null);
  }
  if (user) {
    return (
      <div className="App">
        <h1>Hello, {user.email}</h1>
        <button onClick={signOut}>Sign out</button>
      </div>
    )
  }
    return (
    <div className="App">
      <h1>Hello, please sign in!</h1>
      <button onClick={signInWithGithub}>Sign In</button>
    </div>
  );
}

export default LogIn;













/*


const LogIn: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">LogIn</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="LogIn page" />
      </IonContent>
    </IonPage>
  );
};

export default LogIn;
*/