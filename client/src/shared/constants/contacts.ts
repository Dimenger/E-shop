interface Phone {
  id: string;
  phone: string;
}

interface Social {
  id: string;
  vk: string;
  icon: string;
}

interface Email {
  id: string;
  email: string;
}

interface Address {
  id: string;
  district: string;
  address: string;
}

export interface Contacts {
  readonly phones: readonly Phone[];
  readonly social: readonly Social[];
  readonly emails: readonly Email[];
  readonly addresses: readonly Address[];
}

export const CONTACTS: Contacts = {
  phones: [
    { id: "phone_1", phone: "+8(800)333-44-55" },
    { id: "phone_2", phone: "+7(999)777-00-99" },
  ],
  social: [{ id: "vk", vk: "https://vk.com/", icon: "fa fa-vk fa-2x" }],
  emails: [{ id: "email_1", email: "phase@phase.ru" }],
  addresses: [
    {
      id: "address_1",
      district: "Кинельский район",
      address: "г. Кинель, ул. Мира, 100",
    },
  ],
};
