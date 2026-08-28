export const CONTACT_EMAIL = "vucongchien204@gmail.com";

export interface ContactInfo {
  email: string;
  github: string;
  facebook: string;
}

export const contactInfo: ContactInfo = {
  email: CONTACT_EMAIL,
  github: "https://github.com/vucongchien",
  facebook: "https://facebook.com/",
};

export function getContactInfo(): ContactInfo {
  return contactInfo;
}
