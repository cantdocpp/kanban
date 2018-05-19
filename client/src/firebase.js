import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyBCYIsxn-mNxUwBWs7vz8T6eLdK9WJX0Ik",
    authDomain: "fir-kanban.firebaseapp.com",
    databaseURL: "https://fir-kanban.firebaseio.com",
    projectId: "fir-kanban",
    storageBucket: "fir-kanban.appspot.com",
    messagingSenderId: "902366996395"
  })

  export const db = app.database();
  export const namesRef = db.ref('names');
