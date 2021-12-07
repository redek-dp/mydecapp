import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
    
      <IonGrid>
      <IonRow className="ion-align-items-center">
        <IonCol size="auto">ion-col 00000000000000</IonCol>
        <IonCol size="auto">ion-col 00000000000000</IonCol>
        <IonCol size="auto">ion-col 00000000000000</IonCol>
        <IonCol size="auto">ion-col 00000000000000</IonCol>
      </IonRow>

      <IonRow className="ion-align-items-center">
        <IonCol size-sm>ion-col 00000000000000</IonCol>
        <IonCol size-sm>ion-col 00000000000000</IonCol>
        <IonCol size-sm>ion-col 00000000000000</IonCol>
        <IonCol size-sm>ion-col 00000000000000</IonCol>
      </IonRow>

      

      </IonGrid>

      </IonContent>

    </IonPage>
  );
};

export default Tab3;
