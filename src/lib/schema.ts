import {z} from "zod"

export const StudentFormSchema = z.object({
  registerNumber: z.coerce.number(),
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  email: z.string(),
  department: z.string(),
  address: z.string(),
  dob: z.coerce.date(),
  bloodGroup: z.string(),
})
