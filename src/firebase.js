import firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREASE_PROJECT_ID,
    storageBucket: REACT_APP_FIREASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREASE_APP_ID,

    databaseURL: process.env.REACT_APP_FIREASE_DATABASE_URL
})

export const auth = app.auth()
export default app