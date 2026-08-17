import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadSubmissionSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(/^[+()\-\s0-9]+$/, "Phone can only contain digits and + ( ) -"),
  bookTitle: z.string().trim().max(200).optional(),
  source: z.string().trim().max(200).optional(),
});

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data) => leadSubmissionSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("leads").insert({
      name: data.name,
      email: data.email.toLowerCase(),
      phone: data.phone,
      book_title: data.bookTitle ?? "Seven Dimensions of Prayer",
      source: data.source ?? "landing-page",
    });

    if (error) {
      throw new Error(error.message);
    }

    return { success: true };
  });
