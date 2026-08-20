import { contact } from "../data/contact";

export function buildVCard(): string {
  const [first, ...rest] = contact.fullName.split(" ");
  const last = rest.pop() ?? "";
  const middle = rest.join(" ");

  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${last};${first};${middle};;`,
    `FN:${contact.fullName}`,
    `ORG:${contact.title}`,
    `EMAIL;TYPE=INTERNET:${contact.email}`,
    `URL:${contact.instagram}`,
    "END:VCARD",
  ].join("\r\n");
}
