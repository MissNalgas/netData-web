import { VAPID_KEY } from "@shared/constants";
import { FirebaseApp, initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
	apiKey: "AIzaSyAa5kv01Pt2OB8nYbzErFLOVv04uJw4VR8",
	authDomain: "sentria-3af49.firebaseapp.com",
	projectId: "sentria-3af49",
	storageBucket: "sentria-3af49.appspot.com",
	messagingSenderId: "975597926589",
	appId: "1:975597926589:web:4850079f55371b375adfd4",
};

let app: FirebaseApp | undefined;

if (typeof window !== "undefined") {
	try {
		app = initializeApp(firebaseConfig);

		const messaging = getMessaging(app);

		onMessage(messaging, (payload) => {
			/* eslint-disable no-console -- Console.log for testing API keys */
			console.log("foreground message", { payload });
		});

		getToken(messaging, { vapidKey: VAPID_KEY }).then((token) =>
			console.log({ token })
		);
	} catch(err) {
	}
}

export default app;
