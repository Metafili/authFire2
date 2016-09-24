import { AngularFireModule, AuthMethods } from 'angularfire2';

const firebaseConfig = {
    apiKey: "AIzaSyBfxiMEt_4kUyCOHZm1ig3cgkTb7vf8RVA",
    authDomain: "gymap-71d81.firebaseapp.com",
    databaseURL: "https://gymap-71d81.firebaseio.com",
    storageBucket: "gymap-71d81.appspot.com"
};


const firebaseAuthConfig = {
    method: AuthMethods.Popup,
    remember: 'default'
}

export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);