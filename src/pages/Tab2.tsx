import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk, map } from 'ionicons/icons';

const Tab2: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>MUSIC</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>

                <IonCard className="ion-align-items-center">

                    <img src="https://via.placeholder.com/500x200/3b2d50/bdbac1?text=DAVIDSONBPE" width="100%" />

                    <IonCardHeader>
                        <IonCardTitle>Brasilha DF</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                        This is content, without any paragraph or header tags,
                        within an ion-cardContent element.
                    </IonCardContent>

                    <IonItem href="https://www.google.com.br/maps/@-21.2942557,-46.7893271,14.75z?hl=pt-BR" target="_blank" className="ion-activated">
                        <IonIcon icon={map} slot="start" />
                        <IonLabel>Mapa Gelocalização activated</IonLabel>
                    </IonItem>

                </IonCard>

                <IonCard className="ion-align-items-center">

                    <img src="https://via.placeholder.com/500x200/3b2d50/bdbac1?text=DAVIDSONBPE" width="100%" />

                    <IonCardHeader>
                        <IonCardTitle>Maianme US</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                        This is content, without any paragraph or header tags,
                        within an ion-cardContent element.
                    </IonCardContent>

                    <IonItem href="https://www.google.com.br/maps/@-21.2942557,-46.7893271,14.75z?hl=pt-BR" target="_blank" className="ion-activated">
                        <IonIcon icon={map} slot="start" />
                        <IonLabel>Mapa Gelocalização activated</IonLabel>
                    </IonItem>

                </IonCard>

            </IonContent>
        </IonPage>
    );
};

export default Tab2;
