import { VAPID_KEY } from "@shared/constants";
import { FirebaseApp, initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
	apiKey: "AIzaSyBe7k4JPugn30yOs0ijfdZUvsM0XqnWJO0",
	authDomain: "sentria-app-notifications.firebaseapp.com",
	projectId: "sentria-app-notifications",
	storageBucket: "sentria-app-notifications.appspot.com",
	messagingSenderId: "63485376171",
	appId: "1:63485376171:web:52aa62152eb5dad7a1e9ee",
	measurementId: "G-NEKVPCJJTE",
};

let app: FirebaseApp | undefined;

if (typeof window !== "undefined" && "Notification" in window) {
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
	} catch (err) {}
}

export default app;
