import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'minLength' })
    .max(60, { message: 'maxLength' }),
  email: z.string().email({ message: 'email' }),
  subject: z
    .string()
    .min(3, { message: 'minLength' })
    .max(120, { message: 'maxLength' }),
  message: z
    .string()
    .min(10, { message: 'minLength' })
    .max(2000, { message: 'maxLength' }),
})

export type ContactFormValues = z.infer<typeof contactSchema>
