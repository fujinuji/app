import React from 'react';

import "@ionic/react/css/ionic.bundle.css"
import {IonApp, IonContent, IonHeader, IonToolbar, IonTitle} from '@ionic/react'

function App() {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>IonApp</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h1>Hello</h1>
      </IonContent>
    </IonApp>
  );
}

export default App;
