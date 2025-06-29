importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDyz84v-sD_3bEoFOs9yPUfUfwxjhHrBjo",
  authDomain: "diit-4d8f4.firebaseapp.com",
  projectId: "diit-4d8f4",
  storageBucket: "diit-4d8f4.appspot.com",
  messagingSenderId: "923368509085",
  appId: "1:923368509085:web:df096462dcb504babf0e74",
  measurementId: "G-JWBJSWSL29"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Background message:', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon-192.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
