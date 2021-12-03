const firebaseConfig = {
    // apiKey: 'AIzaSyAuTx1PQX8sWq9tnlriBQ0eCTOg3p0ava4',

    // authDomain: 'todoapp-dd91c.firebaseapp.com',

    // projectId: 'todoapp-dd91c',

    // storageBucket: 'todoapp-dd91c.appspot.com',

    // messagingSenderId: '380555206824',

    // appId: '1:380555206824:web:5dee05cdcf06c1b47ae29d'

    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

export default firebaseConfig;
