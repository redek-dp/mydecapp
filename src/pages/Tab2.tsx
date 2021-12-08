import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk, map } from 'ionicons/icons';

type Item = {
    src: string;
    titolo: string;
    href: string;
    sobtitulo: string;
};
const items: Item[] = [
    {
        titolo: 'Brasil BR',
        src: 'https://via.placeholder.com/500x200/3b2d50/bdbac1?text=DAVIDSONBPE-01',
        href: 'https://www.google.com.br/maps/@-14.7831796,-49.2694105,4.88z?hl=pt-BR',
        sobtitulo: 'Pais da America do sul'
    },
    {
        titolo: 'Italia IT',
        src: 'https://via.placeholder.com/500x200/3b2d50/bdbac1?text=DAVIDSONBPE-02',
        href: 'https://www.google.com.br/maps/@42.8068309,11.208839,5.13z?hl=pt-BR',
        sobtitulo: 'Pais da europeu'
    }
];

const Tab2: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>MUSIC</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>

                    {items.map((image, i) => (
                        <IonCard key={i} >

                            <img src={image.src} width="100%" />

                            <IonCardHeader>
                                <IonCardTitle>{image.titolo}</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>{image.sobtitulo}</IonCardContent>

                            <IonItem href={image.href} target="_blank" className="ion-activated">
                                <IonIcon icon={map} slot="start" />
                                <IonLabel>Mapa Gelocalização activated</IonLabel>
                            </IonItem>
                        </IonCard>
                    ))}

            </IonContent>
        </IonPage>
    );
};

export default Tab2;
