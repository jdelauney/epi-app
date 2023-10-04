import { ZodError, ZodIssue } from 'zod';

export const extractZodErrorToMessage = (error: ZodError, name: string): string => {
  const fieldErrors = error.issues.filter((err: ZodIssue) => err.path.includes(name));
  return fieldErrors.map((err: ZodIssue) => err.message).join(' - ');
};

// const fieldErrors = error.issues.filter((err: { path: string | string[] }) => err.path.includes(name));
// const messages = fieldErrors.map((err: { message: unknown }) => err.message).join(' ');