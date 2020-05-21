import firebase from 'firebase/app';
import 'firebase/firestore';

// Get a Firestore instance
export const db = firebase
  .initializeApp({ projectId: 'todo-list-71585', databaseURL: 'https://todo-list-71585.firebaseio.com' })
  .firestore();
