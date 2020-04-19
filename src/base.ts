import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDjpbWFh6q5WwvUUuzuYFSsyd_Hqzf062w",
    authDomain: "chat-box-react-d0ea4.firebaseapp.com",
    databaseURL: "https://chat-box-react-d0ea4.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp }
export default base;