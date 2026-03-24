import { z } from "zod";

const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}[\s-]?)?[\s-]?(?:\(\d{3}\)|(?:\d{3}))[\s-]?\d{3}[\s-]?\d{4}$|^[0-9]{8,15}$/;

export const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    phone: z.string().regex(phoneRegex, "Please enter a valid phone number."),
    hospitalOrClinic: z.string().optional(),
    email: z
        .string()
        .email("Please enter a valid email address.")
        .optional()
        .or(z.literal("")),
    message: z.string().min(10, "Message must be at least 10 characters."),
    captchaToken: z.string().min(1, "Please complete the CAPTCHA verification."),
});
