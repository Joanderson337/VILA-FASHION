import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDk_ZHRxBiBPxebwz2x5ve39fAc3Tc1ZOQ',
  authDomain: 'club-ecommerce-19403.firebaseapp.com',
  projectId: 'club-ecommerce-19403',
  storageBucket: 'club-ecommerce-19403.appspot.com',
  messagingSenderId: '1066202569429',
  appId: '1:1066202569429:web:07a4809a9247c2dd13205c'
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: 'select_account'
})
