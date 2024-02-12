import { Department } from "@prisma/client";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { StudentFormSchema } from "@/lib/schema";

const studentRouter = createTRPCRouter({
  create: publicProcedure
    .input(StudentFormSchema)
    .mutation(async ({ ctx, input }) => {
      const student = await ctx.db.student.create({
        data: {
          registerNumber: input.registerNumber,
          firstName: input.firstName,
          lastName: input.lastName,
          phone: input.phone,
          email: input.email,
          dob: input.dob,
          Department: input.department as Department,
          Address: input.address,
          BloodGroup: input.bloodGroup,
        },
      });

      return !!student;
    }),
});

export default studentRouter