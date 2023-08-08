import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
<<<<<<< HEAD
    return {"hellooow":ctx};
=======
    return {
      greeting: "hello trpc"
    }
>>>>>>> 5b45a2c16ae6e7498d71049f13c7c6bb5692be42
  }),
});
