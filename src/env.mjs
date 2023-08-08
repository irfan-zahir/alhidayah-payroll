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
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string().min(1),
  NEXT_PUBLIC_FIREBASE_APIKEY: z.string().min(1),
  NEXT_PUBLIC_FIREBASE_AUTHDOMAIN: z.string().min(1),
  NEXT_PUBLIC_FIREBASE_PROJECTID: z.string().min(1),
  NEXT_PUBLIC_FIREBASE_STORAGEBUCKET: z.string().min(1),
  NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID: z.string().min(1),
  NEXT_PUBLIC_FIREBASE_APPID: z.string().min(1),
  NEXT_PUBLIC_FIREBASE_MEASUREMENTID: z.string().min(1)
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_FIREBASE_APIKEY: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  NEXT_PUBLIC_FIREBASE_AUTHDOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  NEXT_PUBLIC_FIREBASE_PROJECTID: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  NEXT_PUBLIC_FIREBASE_STORAGEBUCKET: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  NEXT_PUBLIC_FIREBASE_APPID: process.env.NEXT_PUBLIC_FIREBASE_APPID,
  NEXT_PUBLIC_FIREBASE_MEASUREMENTID: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID
    // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
   * This is especially useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
