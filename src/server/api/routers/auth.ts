import { z } from "zod";
import { createTRPCRouter, protectedUserProcedure, publicProcedure } from "~/server/api/trpc";
import { prisma } from "~/server/lib/prisma";

export const authRouter = createTRPCRouter({
    hello: publicProcedure
        .input(z.object({ text: z.string() }))
        .query(({ input }) => {
            return {
                greeting: `Hello ${input.text}`,
            };
        }),
    getAll: publicProcedure.query(({ ctx }) => {
        return {
            greeting: "hello trpc"
        }
    }),
    login: publicProcedure
        .input(z.string())
        .query(async ({ input: fid }) => {
            const account = await prisma.account.findUnique({
                where: { fid },
                include: { profile: true }
            })

        })
    ,
    getAccount: protectedUserProcedure
        .query(async ({ ctx: { user } }) => {
            const fid = user!.uid
            let account = await prisma.account.findUnique({
                where: { fid },
                include: { profile: true }
            })

            if (!account) {
                //register user here
                account = await prisma.account.create({
                    data: {
                        fid,
                        phone: user!.phone_number!,
                        role: "STAFF"
                    },
                    include: { profile: true }
                })
            }

            return account
        })
});
