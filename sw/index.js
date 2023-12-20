import { initializeApp } from "firebase/app";
import { getMessaging, onBackgroundMessage } from "firebase/messaging/sw";

const firebaseApp = initializeApp({
	apiKey: "AIzaSyAa5kv01Pt2OB8nYbzErFLOVv04uJw4VR8",
	authDomain: "sentria-3af49.firebaseapp.com",
	projectId: "sentria-3af49",
	storageBucket: "sentria-3af49.appspot.com",
	messagingSenderId: "975597926589",
	appId: "1:975597926589:web:4850079f55371b375adfd4",
});

const messaging = getMessaging(firebaseApp);

onBackgroundMessage(messaging, (payload) => {
	console.log(
		"[firebase-messaging-sw.js] Received background message ",
		payload
	);
});
