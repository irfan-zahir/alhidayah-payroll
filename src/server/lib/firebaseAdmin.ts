import admin from 'firebase-admin';
import { getApps, initializeApp } from 'firebase-admin/app';

import { env } from "~/env.mjs";

const serviceAccount: admin.ServiceAccount = {
    clientEmail: env.FIREBASE_ADMIN_CLIENTEMAIL,
    projectId: env.FIREBASE_ADMIN_PROJECTID,
    privateKey: env.FIREBASE_ADMIN_PRIVATEKEY
}

if (!getApps().length) {
    initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
}

const adminAuth = admin.auth();

export { adminAuth };