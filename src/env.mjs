import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    DATABASE_URL: z.string().url(),
    NODE_ENV: z.enum(["development", "test", "production"]),
    FIREBASE_ADMIN_TYPE: z.string().min(1),
    FIREBASE_ADMIN_PROJECTID: z.string().min(1),
    FIREBASE_ADMIN_PRIVATEKEYID: z.string().min(1),
    FIREBASE_ADMIN_PRIVATEKEY: z.string().min(1),
    FIREBASE_ADMIN_CLIENTEMAIL: z.string().min(1),
    FIREBASE_ADMIN_CLIENTID: z.string().min(1),
    FIREBASE_ADMIN_AUTHURI: z.string().min(1),
    FIREBASE_ADMIN_TOKENURI: z.string().min(1),
    FIREBASE_ADMIN_AUTHPROVIDERURL: z.string().min(1),
    FIREBASE_ADMIN_CLIENTCERTURL: z.string().min(1),
    FIREBASE_ADMIN_UNIVERSEDOMAIN: z.string().min(1),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string().min(1),
<<<<<<< HEAD
  NEXT_PUBLIC_FIREBASE_APIKEY: z.string().min(1),
  NEXT_PUBLIC_FIREBASE_AUTHDOMAIN: z.string().min(1),
  NEXT_PUBLIC_FIREBASE_PROJECTID: z.string().min(1),
  NEXT_PUBLIC_FIREBASE_STORAGEBUCKET: z.string().min(1),
  NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID: z.string().min(1),
  NEXT_PUBLIC_FIREBASE_APPID: z.string().min(1),
  NEXT_PUBLIC_FIREBASE_MEASUREMENTID: z.string().min(1)
=======
    NEXT_PUBLIC_FIREBASE_APIKEY: z.string().min(1),
    NEXT_PUBLIC_FIREBASE_AUTHDOMAIN: z.string().min(1),
    NEXT_PUBLIC_FIREBASE_PROJECTID: z.string().min(1),
    NEXT_PUBLIC_FIREBASE_STORAGEBUCKET: z.string().min(1),
    NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID: z.string().min(1),
    NEXT_PUBLIC_FIREBASE_APPID: z.string().min(1),
    NEXT_PUBLIC_FIREBASE_MEASUREMENTID: z.string().min(1)
>>>>>>> 5b45a2c16ae6e7498d71049f13c7c6bb5692be42
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_FIREBASE_APIKEY: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
<<<<<<< HEAD
  NEXT_PUBLIC_FIREBASE_AUTHDOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  NEXT_PUBLIC_FIREBASE_PROJECTID: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  NEXT_PUBLIC_FIREBASE_STORAGEBUCKET: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  NEXT_PUBLIC_FIREBASE_APPID: process.env.NEXT_PUBLIC_FIREBASE_APPID,
  NEXT_PUBLIC_FIREBASE_MEASUREMENTID: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID
=======
    NEXT_PUBLIC_FIREBASE_AUTHDOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
    NEXT_PUBLIC_FIREBASE_PROJECTID: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
    NEXT_PUBLIC_FIREBASE_STORAGEBUCKET: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
    NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
    NEXT_PUBLIC_FIREBASE_APPID: process.env.NEXT_PUBLIC_FIREBASE_APPID,
    NEXT_PUBLIC_FIREBASE_MEASUREMENTID: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID,
>>>>>>> 5b45a2c16ae6e7498d71049f13c7c6bb5692be42
    // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
    FIREBASE_ADMIN_TYPE: process.env.FIREBASE_ADMIN_TYPE,
    FIREBASE_ADMIN_PROJECTID: process.env.FIREBASE_ADMIN_PROJECTID,
    FIREBASE_ADMIN_PRIVATEKEYID: process.env.FIREBASE_ADMIN_PRIVATEKEYID,
    FIREBASE_ADMIN_PRIVATEKEY: process.env.FIREBASE_ADMIN_PRIVATEKEY,
    FIREBASE_ADMIN_CLIENTEMAIL: process.env.FIREBASE_ADMIN_CLIENTEMAIL,
    FIREBASE_ADMIN_CLIENTID: process.env.FIREBASE_ADMIN_CLIENTID,
    FIREBASE_ADMIN_AUTHURI: process.env.FIREBASE_ADMIN_AUTHURI,
    FIREBASE_ADMIN_TOKENURI: process.env.FIREBASE_ADMIN_TOKENURI,
    FIREBASE_ADMIN_AUTHPROVIDERURL: process.env.FIREBASE_ADMIN_AUTHPROVIDERURL,
    FIREBASE_ADMIN_CLIENTCERTURL: process.env.FIREBASE_ADMIN_CLIENTCERTURL,
    FIREBASE_ADMIN_UNIVERSEDOMAIN: process.env.FIREBASE_ADMIN_UNIVERSEDOMAIN,

  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
   * This is especially useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
