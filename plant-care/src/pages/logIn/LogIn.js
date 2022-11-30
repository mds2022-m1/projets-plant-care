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
    localStorage.setItem("test", JSON.stringify(user))
    setUser(user.data.user);
  } 
  async function signInWithGithub() {
    await supabase.auth.signInWithOAuth({
      provider: 'github'
    });
  }

  async function signInWithGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: 'google'
    });
  }
  async function signOut() {
    await supabase.auth.signOut();
    setUser(null);
  }
  if (user) {
    return (
      <div className="App">
        <h1 className='titlelogin'>Salut gros BG, {user.user_metadata.user_name}</h1>
        <button className='button' onClick={signOut}>Deconnexion</button>
      </div>
    )
  }
    return (
    <div className="App">
      <h1 className='titlelogin'>Hello, please sign in!</h1>
      <button className='button' onClick={signInWithGithub}>Connexion GitHub</button>
      <button className='button' onClick={signInWithGoogle}>Connexion Google</button>
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