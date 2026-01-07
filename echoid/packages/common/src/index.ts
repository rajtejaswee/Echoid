import {z} from "zod";

export const SignupSchema = z.object({
    username: z.string().min(3).max(20),
    email: z.string().email(),
    password: z.string().min(8).max(20)
})

export const SigninSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(20)
})

export const CreateContentSchema = z.object({
    title: z.string(),
    link: z.string(),
    type: z.enum(["Image", "Video", "Audio", "Article"]),
    tags: z.array(z.string()),
})

export type SigninInput = z.infer<typeof SigninSchema>;
export type SignupInput = z.infer<typeof SignupSchema>
export type CreateContentInput = z.infer<typeof CreateContentSchema>