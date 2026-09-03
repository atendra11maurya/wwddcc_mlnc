export interface ICCContact {
  role: string;
  name: string;
  email?: string;
  phone?: string;
}

export const supportData = {
  iccInfo: {
    verified: false, // Flag to indicate placeholder
    contacts: [
      {
        role: "Presiding Officer",
        name: "[Official ICC contact to be added]"
      },
      {
        role: "Member",
        name: "[Official ICC contact to be added]"
      }
    ],
    procedure: [
      "Understand your options",
      "Contact the appropriate authority",
      "Submit the official complaint",
      "Follow the institution's process"
    ],
    disclaimer: "WDC provides awareness and support information. The Internal Complaints Committee (ICC) is the formal institutional authority for sexual harassment complaints."
  }
};
