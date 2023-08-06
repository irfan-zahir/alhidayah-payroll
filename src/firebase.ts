import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { env } from "~/env.mjs";

const config = {
  apiKey: env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId: env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: env.NEXT_PUBLIC_FIREBASE_APPID,
  measurementId: env.NEXT_PUBLIC_FIREBASE_MEASURMENTID
}

const app = initializeApp(config);
export const auth = getAuth(app);