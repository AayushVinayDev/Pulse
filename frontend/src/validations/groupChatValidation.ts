import { z } from "zod"

export const createChatSchema = z.object({
    title: z
        .string()
        .min(4, { message: "Chat title must be 4 characters long" })
        .max(50, { message: "title is too long" }),
    passcode: z
        .string()
        .min(4, { message: "passcode must be 4 characters long" })
        .max(25, { message: "passcode is too long" }),
}).required()

export type createChatSchemaType = z.infer<typeof createChatSchema>