import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, RecaptchaVerifier, ConfirmationResult } from '@firebase/auth';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.NEXT_PUBLIC_FIREBASEAPPID,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
declare global {
    interface Window {
        recaptchaVerifier: RecaptchaVerifier | undefined
        confirmationResult: ConfirmationResult | undefined
    }
}

function isFirebaseError(error: unknown): error is { code: string } {
    return (typeof error === 'object' && error !== null && 'code' in error);
}

const firebaseErrorRecord: Record<string, string> = {
    'auth/user-not-found': 'No user associated with email',
    'auth/wrong-password': 'Provided password is not valid',
};

export {
    app,
    auth,
    isFirebaseError,
    firebaseErrorRecord,
};