import React, { useState } from 'react';
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonImg,
  IonText,
  IonIcon,
  IonButton,
} from '@ionic/react';
import { heart, heartOutline } from 'ionicons/icons';

const KDramaFavorites: React.FC = () => {
  const [favorites, setFavorites] = useState<{ title: string; img: string; liked: boolean }[]>([
    {
      title: 'Crash Landing on You',
      img: 'https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABR98UHwhazqRadKefWpBk11jq4N8MoRCic-L9ss1_0Jj4avsBB5rcT__zEqpMUxKfk5zFD1p9WhZRE_QEud_pioCx9hiol2pTTby.jpg?r=101',
      liked: false,
    },
    {
      title: 'Goblin (Guardian: The Lonely and Great God)',
      img: 'https://img.jakpost.net/c/2017/01/06/2017_01_06_19041_1483684209._large.jpg',
      liked: false,
    },
    {
      title: 'Itaewon Class',
      img: 'https://themonkeydilemma.com/wp-content/uploads/2024/09/itaewon-class.jpeg',
      liked: false,
    },
    {
      title: 'Vincenzo',
      img: 'https://cdn.prod.website-files.com/6299f2e9711457612f15f77e/62f4e5690a41920c551b48b1_VINCENZO.jpg',
      liked: false,
    },
    {
      title: 'Extraordinary Attorney Woo',
      img: 'https://i.ytimg.com/vi/MxeXECe2t-c/maxresdefault.jpg',
      liked: false,
    },
    {
      title: 'My Love from the Star',
      img: 'https://1.vikiplatform.com/c/20503c/My-Love-From-the-Star_2340x1308.jpg?x=b',
      liked: false,
    },
  ]);

  const toggleLike = (index: number) => {
    setFavorites(prev =>
      prev.map((item, i) => (i === index ? { ...item, liked: !item.liked } : item))
    );
  };

  return (
    <IonContent className="ion-padding" style={{ display: 'flex', justifyContent: 'center' }}>
      <IonGrid style={{ maxWidth: '1000px' }}>
        <IonRow className="ion-justify-content-center">
          {favorites.map((item, index) => (
            <IonCol size="12" sizeMd="4" key={index}>
              <IonCard style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
                <IonImg src={item.img} alt={item.title} style={{ height: '250px', objectFit: 'cover' }} />
                <IonCardContent className="ion-text-center">
                  <IonText>
                    <h2 style={{ fontSize: '1.1rem', margin: '0.5rem 0', fontWeight: 'bold' }}>
                      {item.title}
                    </h2>
                  </IonText>
                  <IonButton fill="clear" onClick={() => toggleLike(index)}>
                    <IonIcon
                      icon={item.liked ? heart : heartOutline}
                      color={item.liked ? 'danger' : 'medium'}
                      style={{ fontSize: '1.5rem' }}
                    />
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default KDramaFavorites;
