import { z } from "zod";

export const contactSchema = z.object({
  message: z
    .string()
    .min(10, { message: "Message must contain at least 10 character(s)" }),
  email: z.string().email(),
  name: z.string().min(3, { message: "Message must contain at least 3 character(s)" }),
});
