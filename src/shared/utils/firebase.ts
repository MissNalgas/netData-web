import { VAPID_KEY } from "@shared/constants";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
	apiKey: "AIzaSyAa5kv01Pt2OB8nYbzErFLOVv04uJw4VR8",
	authDomain: "sentria-3af49.firebaseapp.com",
	projectId: "sentria-3af49",
	storageBucket: "sentria-3af49.appspot.com",
	messagingSenderId: "975597926589",
	appId: "1:975597926589:web:4850079f55371b375adfd4",
};

const app = initializeApp(firebaseConfig);
export default app;

const messaging = getMessaging(app);

onMessage(messaging, (payload) => {
	/* eslint-disable no-console -- Console.log for testing API keys */
	console.log("foreground message", { payload });
});

getToken(messaging, { vapidKey: VAPID_KEY }).then((token) =>
	console.log({ token })
);
