import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonAvatar,
  IonText
} from '@ionic/react';
import { schoolOutline, homeOutline } from 'ionicons/icons';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">

        {/* Personal Info Card */}
        <IonCard style={{
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        }}>
          <IonCardHeader>
            <IonRow className="ion-align-items-center">
              <IonCol size="auto">
                <IonAvatar style={{ width: '60px', height: '60px' }}>
                  <img
                    src="https://scontent.fcgy1-2.fna.fbcdn.net/v/t39.30808-6/494441211_2717259928664510_2841258662844808051_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFQMXXniR42TouzNy1jPKUfQKH8q3EdsoxAofyrcR2yjK7Y64L3xFoq1u9RpxrBudol2-BB073DrEBkxxunvgS6&_nc_ohc=uLEMlpCDHdMQ7kNvwH_btHu&_nc_oc=AdlarspgJ1vOJd92WDXfpg7sHkgSfDHKR6BrxSzE6htj6aUC3EGiwrjHKlWw1WBwISY&_nc_zt=23&_nc_ht=scontent.fcgy1-2.fna&_nc_gid=Igrl8exsv1voD6ZIgfMvpg&oh=00_AfKb5DdqTDweE8QYfY_vryXSgt-o2JEcsCvphQypMXLwKg&oe=6829EEB3"
                    alt="Avatar"
                  />
                </IonAvatar>
              </IonCol>
              <IonCol>
                <IonCardTitle>
                  <IonText color="dark">
                    <h2 style={{ margin: 0 }}>James Ivan C. Felicitas</h2>
                  </IonText>
                </IonCardTitle>
              </IonCol>
            </IonRow>
          </IonCardHeader>

          <IonCardContent>
            <IonGrid>
              <IonRow className="ion-align-items-center">
                <IonCol size="auto"><IonIcon icon={schoolOutline} color="primary" /></IonCol>
                <IonCol>
                  <IonText>
                    3rd Year IT Student at Northern Bukidnon State College. Interested in data analytics and real-world problem solving.
                  </IonText>
                </IonCol>
              </IonRow>

              <IonRow className="ion-align-items-center">
                <IonCol size="auto"><IonIcon icon={schoolOutline} color="primary" /></IonCol>
                <IonCol>
                  <IonText>
                    Graduated from Napico Elementary School (2016) and Alae National High School (2022).
                  </IonText>
                </IonCol>
              </IonRow>

              <IonRow className="ion-align-items-center">
                <IonCol size="auto"><IonIcon icon={homeOutline} color="primary" /></IonCol>
                <IonCol>
                  <IonText>
                    Lives in Bukidnon, Philippines.
                  </IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>

        {/* Skills Card */}
        <IonCard style={{
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        }}>
          <IonCardHeader>
            <IonCardTitle>
              <IonText color="primary">
                <h3 style={{ margin: 0 }}>Skills</h3>
              </IonText>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol><IonText>HTML</IonText></IonCol>
                <IonCol><IonText>CSS</IonText></IonCol>
              </IonRow>
              <IonRow>
                <IonCol><IonText>JavaScript</IonText></IonCol>
                <IonCol><IonText>Figma</IonText></IonCol>
              </IonRow>
              <IonRow>
                <IonCol><IonText>Git</IonText></IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>

        {/* Projects Card */}
        <IonCard style={{
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        }}>
          <IonCardHeader>
            <IonCardTitle>
              <IonText color="primary">
                <h3 style={{ margin: 0 }}>Projects</h3>
              </IonText>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonGrid>
              <IonRow><IonCol><IonText>Calculator</IonText></IonCol></IonRow>
              <IonRow><IonCol><IonText>Maze Game</IonText></IonCol></IonRow>
              <IonRow><IonCol><IonText>E-commerce Website</IonText></IonCol></IonRow>
              <IonRow><IonCol><IonText>Pacman Game</IonText></IonCol></IonRow>
              <IonRow><IonCol><IonText>To-Do List App</IonText></IonCol></IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default About;
