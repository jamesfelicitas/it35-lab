import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonThumbnail,
  IonTitle,
  IonToolbar
} from '@ionic/react';

const Feed: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>MLBB Feed</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {/* Intro Card */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Mobile Legends</IonCardTitle>
            <IonCardSubtitle>Welcome to the Land of Dawn</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Team up, choose your hero, and join the battle! Mobile Legends: Bang Bang brings fast-paced 5v5 MOBA action right to your fingertips.
          </IonCardContent>
        </IonCard>

        {/* Hero Spotlight */}
        <IonCard>
          <img
            alt="Yu Zhong"
            src="https://static.wikia.nocookie.net/mobile-legends/images/1/19/Hero029-portrait.png"
          />
          <IonCardHeader>
            <IonCardTitle>Hero Spotlight: Yu Zhong</IonCardTitle>
            <IonCardSubtitle>Fighter / Lifesteal / AoE</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Yu Zhong excels at sustained fights and AoE damage. His Black Dragon Form can disrupt entire team formations.
          </IonCardContent>
        </IonCard>

        {/* Skin Highlights */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>New Skins</IonCardTitle>
            <IonCardSubtitle>Fresh Looks This Season</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonThumbnail slot="start">
                  <img
                    alt="Lancelot - Bren Esports"
                    src="https://static.wikia.nocookie.net/mobile-legends/images/2/2b/Lancelot_BREN_Esports_skin.png"
                  />
                </IonThumbnail>
                <IonLabel>Lancelot – Bren Esports</IonLabel>
              </IonItem>

              <IonItem>
                <IonThumbnail slot="start">
                  <img
                    alt="Esmeralda - Lady Thief"
                    src="https://static.wikia.nocookie.net/mobile-legends/images/f/f9/Esmeralda_Lady_Thief_skin.png"
                  />
                </IonThumbnail>
                <IonLabel>Esmeralda – Lady Thief</IonLabel>
              </IonItem>

              <IonItem>
                <IonThumbnail slot="start">
                  <img
                    alt="Granger - Biosolder"
                    src="https://static.wikia.nocookie.net/mobile-legends/images/1/1d/Granger_Biosolder_skin.png"
                  />
                </IonThumbnail>
                <IonLabel>Granger – Biosolder</IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Feed;
