export interface ContactMessageInput {
  message: string;
  senderEmail?: string;
}

export function validateContactInput(input: ContactMessageInput): { valid: boolean; error?: string } {
  if (!input.message || input.message.trim().length === 0) {
    return { valid: false, error: "Tin nhắn không được để trống" };
  }
  return { valid: true };
}
