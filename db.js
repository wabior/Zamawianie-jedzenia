  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
  import { 
      getFirestore, 
      collection, 
      addDoc,
      getDocs,
      doc,
      onSnapshot,
      query
     } from 'https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js';

import firebaseConfig from './env.js';

const app = initializeApp(firebaseConfig.firebaseConfig);
const db = getFirestore();
const allOrders = await getDocs(collection(db, "orders"));

export async function addOrder(order){
    try {  
        const docRef = await addDoc(collection(db, "orders"), order);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

async function getAllOrders(){
    allOrders.forEach(element => {
        console.log(JSON.stringify(element.data()));
    });
}

const q = query(collection(db, "orders"));
onSnapshot(q, (querySnapshot) => {
    console.clear();
    querySnapshot.forEach((doc) => {
    console.log(doc.data());
  });
});

