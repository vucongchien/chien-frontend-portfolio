"use server";

import { ContactMessageInput, validateContactInput } from "./contact.schema";

export async function sendContactAction(input: ContactMessageInput) {
  const validation = validateContactInput(input);
  if (!validation.valid) {
    return { ok: false, error: validation.error };
  }

  // Placeholder for server-side mailing logic if configured in the future
  return { ok: true };
}
