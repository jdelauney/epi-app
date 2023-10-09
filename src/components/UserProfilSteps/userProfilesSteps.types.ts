import { z } from 'zod';

export const userProfileSchema = z.object({
  email: z.string({ required_error: 'un email est obligatoire' }).email({ message: 'Adresse email invalide' }),
  password: z
    .string({ required_error: 'mot de passe obligatoire' })
    .min(8, { message: 'Mot de passe trop court. Minimum 8 caractères' }),
  firstName: z.string(),
  lastName: z.string(),
});

export type UserProfilDataType = z.infer<typeof userProfileSchema>;

export type ErrorsType = Record<string, string>;
