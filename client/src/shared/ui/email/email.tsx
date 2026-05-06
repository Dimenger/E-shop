import { CONTACTS } from "@/shared/constants/contacts";

export const Email = () => {
  return (
    <div>
      {CONTACTS.emails.map(({ id, email }) => (
        <div key={id}>{email}</div>
      ))}
    </div>
  );
};
