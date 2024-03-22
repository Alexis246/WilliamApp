import * as z from 'zod';

export const SignupValidation = z.object({
    name: z.string().min(2, {message: 'Name must be at least 2 characters'}).max(30),
    username: z.string().min(2, {message: 'Username must be at least 2 characters.'}).max(30),
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password must be at Least 8 characters'}).max(30),
})