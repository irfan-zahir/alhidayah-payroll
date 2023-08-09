import admin from 'firebase-admin';
import { getApps, initializeApp } from 'firebase-admin/app';

import { env } from "~/env.mjs";

const serviceAccount: admin.ServiceAccount = JSON.parse(env.FIREBASE_ADMIN_SERVICE_ACCOUNT_KEY)

if (!getApps().length) {
    initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
}

const adminAuth = admin.auth();

export { adminAuth };