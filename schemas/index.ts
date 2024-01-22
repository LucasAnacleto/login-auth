import * as z from "zod"

export const LoginSchema = z.object({
  email: z.string().email ({
    message: "Email é necessário",
  }),
  password: z.string().min(1, {
    message: "Password é necessário",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email ({
    message: "Email é necessário",
  }),
  password: z.string().min(6, {
    message: "Mínimo de 6 caracteres necessários",
  }),
  name: z.string().min(1, {
    message: "Name é necessário"
  })
});
