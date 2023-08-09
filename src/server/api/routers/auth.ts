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
    getProfile: protectedUserProcedure
        .query(async ({ ctx: { user } }) => {
            const fid = user!.uid
            const account = await prisma.account.findUnique({
                where: { fid },
                select: { profile: true }
            })
            return account?.profile
        })
});
