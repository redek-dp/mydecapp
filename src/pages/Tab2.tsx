import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

const Tab2: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>MUSIC</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>

                <IonCard href="#" target="_blank" className="ion-align-items-center">

                    <img src="https://via.placeholder.com/500x200/3b2d50/bdbac1?text=DAVIDSONBPE" width="100%" />

                    <IonCardHeader>
                        <IonCardTitle>Madison, WI</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                        This is content, without any paragraph or header tags,
                        within an ion-cardContent element.
                    </IonCardContent>

                    <IonItem className="ion-activated">
                        <IonIcon icon={wifi} slot="start" />
                        <IonLabel>Card Link Item 1 activated</IonLabel>
                    </IonItem>

                </IonCard>

            </IonContent>
        </IonPage>
    );
};

export default Tab2;
