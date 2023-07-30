import { initializeApp } from "firebase/app"
import { getDatabase, ref, push, remove } from "firebase/database"

// config
const firebaseConfig = {
  apiKey: "AIzaSyDsaJneEsu2c-805ApRtKW68PgiaBr9YQE",
  appId: "1:427025200282:web:ecec4d99169110f50d1b23",
  projectId: "spltrproject",
  authDomain: "spltrproject.firebaseapp.com",
  databaseURL: "https://spltrproject.firebaseio.com",
  storageBucket: "spltrproject.appspot.com",
  messagingSenderId: "427025200282",
  measurementId: "G-B104P7SX9W"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app)
const dbRef = ref(db)

// Add data to Firebase
const addBill = (data) => {
  push(ref(db), { ...data })
}

// Remove data to Firebase
const removeBill = (id) => {
  remove(ref(db, id))
}

export {
  db,
  dbRef,
  addBill,
  removeBill
}
