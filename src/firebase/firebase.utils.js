import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAtUaizv3KJCEBc5ct4yikqJMqv3RQzlI0",
    authDomain: "nidheesh-online-shop.firebaseapp.com",
    databaseURL: "https://nidheesh-online-shop.firebaseio.com",
    projectId: "nidheesh-online-shop",
    storageBucket: "nidheesh-online-shop.appspot.com",
    messagingSenderId: "138773238321",
    appId: "1:138773238321:web:21cc4dc04ad2263d69bb10",
    measurementId: "G-WXT2HQPE6G"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });
   return await batch.commit()
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => { const { title , items } = doc.data();

    return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
    }
});
return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
},{})
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
}

export default firebase;