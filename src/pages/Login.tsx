import { useState } from 'react';
import {
  IonAlert,
  IonAvatar,
  IonButton,
  IonContent,
  IonInput,
  IonInputPasswordToggle,
  IonPage,
  IonToast,
  useIonRouter
} from '@ionic/react';

import { supabase } from '../utils/supabaseClient';

// Reusable AlertBox component
const AlertBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({ message, isOpen, onClose }) => {
  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={onClose}
      header="Notification"
      message={message}
      buttons={['OK']}
    />
  );
};

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const doLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setAlertMessage(error.message);
      setShowAlert(true);
      return;
    }

    setShowToast(true);
    setTimeout(() => {
      navigation.push('/it35-lab/app', 'forward', 'replace');
    }, 300);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div className="login-card">
          <IonAvatar className="avatar-wrapper">
            <img
                src="https://media.tenor.com/Hsfpmr_PFIUAAAAM/elmo-fire-elmo.gif"
              alt="Salmoon"
            />
            <div className="avatar-glow"></div>
          </IonAvatar>

          <h1 className="signup-title">USER LOGIN</h1>
         

          <IonInput
            placeholder="Your Email"
            type="email"
            fill="outline"
            style={{
              borderRadius: '12px',
              marginBottom: '10px',
              '--highlight-color-focused': '#69B41E',
              '--border-color': '#69B41E'
            }}
            value={email}
            onIonChange={(e) => setEmail(e.detail.value!)}
          />

          <IonInput
            placeholder="Your Password"
            type="password"
            fill="outline"
            style={{
              borderRadius: '12px',
              marginBottom: '10px',
              '--highlight-color-focused': '#69B41E',
              '--border-color': '#69B41E'
            }}
            value={password}
            onIonChange={(e) => setPassword(e.detail.value!)}
          >
            <IonInputPasswordToggle slot="end" />
          </IonInput>

          <IonButton
            onClick={doLogin}
            expand="full"
            fill="solid"
            color="success"
            style={{ marginTop: '20px' }}
          >
            Login
          </IonButton>

          <IonButton routerLink="/it35-lab/app/home/signup" expand="full" fill="clear" color="success" >
          Don't have an account?
        </IonButton>
        </div>

        <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Login successful! Redirecting..."
          duration={1500}
          position="top"
          color="success"
        />
      </IonContent>

     {/* Floating Animation and Card Styles */}
     <style>
        {`
          @keyframes floatCard {
            0%, 100% {
              transform: translateY(0) rotateX(0deg) rotateZ(0deg);
              box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2), 0 0 20px 3px hsla(72, 18.50%, 84.10%, 0.60);
            }
            50% {
             
              box-shadow: 0 25px 40px rgba(0, 0, 0, 0.3), 0 0 35px 7px rgba(0, 255, 47, 0.6);
            }
          }

          @keyframes floatAvatar {
            0%, 100% {
              transform: translateY(0) rotateY(0deg) rotateX(0deg);
            }
            50% {
           
            }
          }

          .login-card {
    
  max-width: 380px;
  margin: 8% auto 0 auto;
  padding: 25px 25px 30px 25px;
  background: #1e1e2f;
  border-radius: 20px;
  animation: floatCard 6s ease-in-out infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 8px 20px rgba(7, 7, 7, 0.6);
}


          .login-card ion-input {
            width: 100%;
            margin-top: 15px;
          }

          .login-card ion-button {
            width: 100%;
          }

          .avatar-wrapper {
            position: relative;
            width: 150px;
            height: 150px;
            border-radius: 50%;
            overflow: hidden;
            animation: floatAvatar 6s ease-in-out infinite;
            cursor: default;
            margin-bottom: 20px;
          }
        `}
      </style>
    </IonPage>
  );
};

export default Login;