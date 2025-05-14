import React, { useState } from 'react';
import {
  IonContent,
  IonSearchbar,
  IonList,
  IonItem,
  IonLabel,
  IonText,
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonModal,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonIcon
} from '@ionic/react';
import { close } from 'ionicons/icons';

interface IonicComponent {
  name: string;
  description: string;
  useCase: string;
}

const IonicComponentSearch: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedComponent, setSelectedComponent] = useState<IonicComponent | null>(null);
  const [showModal, setShowModal] = useState(false);

  const ionicComponents: IonicComponent[] = [
    {
      name: 'IonButton',
      description: 'IonButton is a clickable component used for user interactions.',
      useCase: 'Use IonButton for form submissions, navigations, or triggering actions such as opening modals or alerts.'
    },
    {
      name: 'IonCard',
      description: 'IonCard is a flexible container for content such as images, text, and links.',
      useCase: 'Use IonCard to display user profiles, product previews, or any combination of content in a visually grouped manner.'
    },
    {
      name: 'IonInput',
      description: 'IonInput is an input field component used to receive user input.',
      useCase: 'Commonly used in forms for entering text, numbers, emails, or passwords.'
    },
    {
      name: 'IonAlert',
      description: 'IonAlert is a dialog component that presents users with important information or choices.',
      useCase: 'Use IonAlert for warnings, confirmations, or any modal message that requires user action.'
    },
    {
      name: 'IonModal',
      description: 'IonModal is a full-screen overlay that can display custom content or pages.',
      useCase: 'Best used for editing forms, viewing details, or multi-step wizards without navigating away.'
    },
    {
      name: 'IonToast',
      description: 'IonToast provides brief feedback about an operation through a small message.',
      useCase: 'Use to show notifications like "Message Sent", "Saved Successfully", or network status changes.'
    },
    {
      name: 'IonLoading',
      description: 'IonLoading is a loading indicator that can show progress or status of a task.',
      useCase: 'Use while waiting for API data, form submission processing, or content loading.'
    },
    {
      name: 'IonSearchbar',
      description: 'IonSearchbar is a text field component used to filter or search content.',
      useCase: 'Commonly placed above lists or grids for real-time search and filtering.'
    },
    {
      name: 'IonTabs',
      description: 'IonTabs helps manage tab-based navigation in an app.',
      useCase: 'Use for switching between major sections of your app like Home, Explore, Profile.'
    },
    {
      name: 'IonRouterOutlet',
      description: 'IonRouterOutlet manages navigation and routing transitions.',
      useCase: 'Essential in multi-page Ionic apps, it renders the right view based on the route.'
    },
    {
      name: 'IonItem',
      description: 'IonItem is a container component used to group text, icons, inputs, and more.',
      useCase: 'Used in lists to display a combination of elements like avatars, labels, switches.'
    },
    {
      name: 'IonLabel',
      description: 'IonLabel is used to display text alongside other form elements.',
      useCase: 'Often paired with IonItem or IonInput to provide context or description.'
    },
    {
      name: 'IonCheckbox',
      description: 'IonCheckbox allows users to toggle between checked and unchecked states.',
      useCase: 'Use when users need to select one or multiple options from a list.'
    },
    {
      name: 'IonRadio',
      description: 'IonRadio is used within IonRadioGroup to select a single option from a set.',
      useCase: 'Perfect for surveys, settings, and configuration pages where only one selection is allowed.'
    },
    {
      name: 'IonToggle',
      description: 'IonToggle is a switch component that lets users turn an option on or off.',
      useCase: 'Ideal for enabling/disabling settings or preferences within an app.'
    },
    {
      name: 'IonDatetime',
      description: 'IonDatetime allows users to select dates and times with a calendar-style UI.',
      useCase: 'Use in forms where scheduling, date selection, or time picking is required.'
    },
    {
      name: 'IonSegment',
      description: 'IonSegment is a set of buttons used to toggle between views or filter content.',
      useCase: 'Common in filterable views like news categories, product types, or toggling display modes.'
    },
    {
      name: 'IonAvatar',
      description: 'IonAvatar is used to display circular user profile images or icons.',
      useCase: 'Frequently used in chat apps, profile cards, or lists involving users.'
    },
    {
      name: 'IonFab',
      description: 'IonFab is a floating action button that performs a primary app action.',
      useCase: 'Use for quick access actions like add, compose, or camera in mobile layouts.'
    },
    {
      name: 'IonSkeletonText',
      description: 'IonSkeletonText is a placeholder element that mimics content while loading.',
      useCase: 'Improves UX by indicating that content is loading, especially in cards or lists.'
    },
  ];

  const filteredComponents = ionicComponents.filter(component =>
    component.name.toLowerCase().includes(searchText.toLowerCase()) ||
    component.description.toLowerCase().includes(searchText.toLowerCase()) ||
    component.useCase.toLowerCase().includes(searchText.toLowerCase())
  );

  const openModal = (component: IonicComponent) => {
    setSelectedComponent(component);
    setShowModal(true);
  };

  return (
    <IonContent className="ion-padding">
      <IonCard style={{ maxWidth: '800px', margin: '0 auto' }}>
        <IonCardContent>
          <IonSearchbar
            value={searchText}
            onIonInput={(e) => setSearchText(e.detail.value ?? '')}
            placeholder="Search Ionic components..."
            debounce={200}
            animated
          />
        </IonCardContent>
      </IonCard>

      <IonGrid>
        <IonRow>
          {filteredComponents.length > 0 ? (
            filteredComponents.map((component, index) => (
              <IonCol size="12" key={index}>
                <IonCard
                  style={{ borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.1)', cursor: 'pointer' }}
                  onClick={() => openModal(component)}
                >
                  <IonCardContent>
                    <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{component.name}</h2>
                    <p>{component.description}</p>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))
          ) : (
            <IonCol size="12">
              <IonText color="medium">
                <p style={{ textAlign: 'center', marginTop: '2rem' }}>No matching Ionic components found.</p>
              </IonText>
            </IonCol>
          )}
        </IonRow>
      </IonGrid>

      <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{selectedComponent?.name}</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => setShowModal(false)}>
                <IonIcon icon={close} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <h2 style={{ fontSize: '1.4rem' }}>{selectedComponent?.name}</h2>
          <p><strong>Description:</strong> {selectedComponent?.description}</p>
          <p><strong>Use Case:</strong> {selectedComponent?.useCase}</p>
        </IonContent>
      </IonModal>
    </IonContent>
  );
};

export default IonicComponentSearch;
