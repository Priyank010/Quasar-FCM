importScripts('https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.7/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in your app's Firebase config object.
var firebaseConfig = {
    apiKey: "AIzaSyBVS_6ZkZSxaIvK8Ln3UuXLtuqXOjA_NPA",
    authDomain: "quasar-fcm-testing.firebaseapp.com",
    projectId: "quasar-fcm-testing",
    storageBucket: "quasar-fcm-testing.appspot.com",
    messagingSenderId: "268463883056",
    appId: "1:268463883056:web:4d23153be1f7dc5e773ef5",
    measurementId: "G-JDWFH6FPL8"
};
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();


//If the app in background, then we will show the notification 
messaging.setBackgroundMessageHandler(function(payload) {
    var  title =payload.data.title;
    var options ={
        body: payload.data.message,
        icon: 'favicon.ico',
        // data:{
        //     time: new Date(Date.now()).toString(),
        //     click_action: payload.notification.click_action
        // }
    };
    return self.registration.showNotification(title, options);     
});