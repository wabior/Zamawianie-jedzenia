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
        return getAllOrders();
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

async function getAllOrders(){
    let dupa = [];
    allOrders.forEach(element => {
        dupa.push(element);
        console.log(JSON.stringify(element.data()));
    });
    return dupa;
}

const q = query(collection(db, "orders"));
onSnapshot(q, (querySnapshot) => {
    let ordersFromDb = [];
    console.clear();
    querySnapshot.forEach((doc) => {
        ordersFromDb.push(doc.data());
        console.log(doc.data());
  });
  console.log(ordersFromDb);
});

