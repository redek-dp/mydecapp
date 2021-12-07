import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,  IonList, IonItem, IonThumbnail, IonImg, IonLabel } from '@ionic/react';
//import './Tab1.css';

type Item = {
    src: string;
    text: string;
    href: string;
};
const items: Item[] = [
    {
        src: 'https://placekitten.com/g/200/300',
        href: 'https://ionicframework.com/',
        text: 'a picture of a cat'
    },
    {
        src: 'https://www.gravatar.com/avatar/1?d=identicon',
        href: 'https://www.gravatar.com/avatar/1?d=identicon',
        text: 'MIN APP 01'
    },
    {
        src: 'https://www.gravatar.com/avatar/2?d=identicon',
        href: 'https://www.gravatar.com/avatar/2?d=identicon',
        text: 'MIN APP 02'
    },
    {
        src: 'https://www.gravatar.com/avatar/3?d=identicon',
        href: 'https://www.gravatar.com/avatar/3?d=identicon',
        text: 'MIN APP 03'
    },
    {
        src: 'https://www.gravatar.com/avatar/4?d=identicon',
        href: 'https://www.gravatar.com/avatar/4?d=identicon',
        text: 'MIN APP 04'
    },
    {
        src: 'https://www.gravatar.com/avatar/5?d=identicon',
        href: 'https://www.gravatar.com/avatar/5?d=identicon',
        text: 'MIN APP 05'
    },
    {
        src: 'https://www.gravatar.com/avatar/6?d=identicon',
        href: 'https://www.gravatar.com/avatar/6?d=identicon',
        text: 'MIN APP 06'
    },
    {
        src: 'https://www.gravatar.com/avatar/7?d=identicon',
        href: 'https://www.gravatar.com/avatar/7?d=identicon',
        text: 'MIN APP 07'
    },
    {
        src: 'https://www.gravatar.com/avatar/8?d=identicon',
        href: 'https://www.gravatar.com/avatar/8?d=identicon',
        text: 'MIN APP 08'
    },
    {
        src: 'https://www.gravatar.com/avatar/9?d=identicon',
        href: 'https://www.gravatar.com/avatar/9?d=identicon',
        text: 'MIN APP 09'
    },
    {
        src: 'https://www.gravatar.com/avatar/10?d=identicon',
        href: 'https://www.gravatar.com/avatar/10?d=identicon',
        text: 'MIN APP 10'
    },
    {
        src: 'https://www.gravatar.com/avatar/11?d=identicon',
        href: 'https://www.gravatar.com/avatar/11?d=identicon',
        text: 'MIN APP 11'
    }
];

const Tab1: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>HOME</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>

                <IonList>
                    {items.map((image, i) => (
                        <IonItem href={image.href} target="_blank" key={i} >
                            <IonThumbnail slot="start">
                                <IonImg src={image.src} />
                            </IonThumbnail>
                            <IonLabel>{image.text}</IonLabel>
                        </IonItem>
                    ))}
                </IonList>



            </IonContent>
        </IonPage>
    );
};

export default Tab1;
