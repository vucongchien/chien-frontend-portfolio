"use server";

import { validateContactInput, type ContactMessageInput } from "./contact.schema";

export async function sendContactAction(input: ContactMessageInput) {
  const validation = validateContactInput(input);
  if (!input.message || input.message.trim().length === 0) {
    return { valid: false, error: "Tin nhắn không được để trống" };
  }
  return { valid: validation.valid };
}
