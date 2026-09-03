export interface Person {
  id: string;
  name: string;
  role: string;
  category: "Faculty" | "Executive Board";
  image: string;
  handle?: string;
  instagramUrl?: string;
  bio?: string;
  order: number;
}

export const peopleData: Person[] = [
  {
    id: "president",
    name: "Pragya",
    role: "President",
    category: "Executive Board",
    image: "/images/team/exec_president.jpg",
    handle: "@praggyaaa_a",
    instagramUrl: "https://www.instagram.com/wdc.mlnc/p/DboTtZzyAud/",
    bio: "Dedicated to showing up for people, listening, asking questions, and investing in change across campus.",
    order: 1
  },
  {
    id: "vice-president",
    name: "Ritika",
    role: "Vice President",
    category: "Executive Board",
    image: "/images/team/exec_vice-president.jpg",
    handle: "@ritikaa_r10",
    instagramUrl: "https://www.instagram.com/wdc.mlnc/p/DboTaqgSDAg/",
    bio: "Bringing genuine energy, care, and collective spirit to WDC community building.",
    order: 2
  },
  {
    id: "general-secretary",
    name: "Ansh",
    role: "General Secretary",
    category: "Executive Board",
    image: "/images/team/exec_general-secretary.jpg",
    handle: "@anshtomar__",
    instagramUrl: "https://www.instagram.com/wdc.mlnc/p/DboS_bUSR8G/",
    bio: "Keeping institutional documentation, admin coordination, and smooth operations on track.",
    order: 3
  },
  {
    id: "marketing-secretary",
    name: "Ayushi",
    role: "Marketing Secretary",
    category: "Executive Board",
    image: "/images/team/exec_marketing-secretary.jpg",
    handle: "@ayyyushisingh",
    instagramUrl: "https://www.instagram.com/wdc.mlnc/p/DboSmViytxE/",
    bio: "Shaping visual communications, digital engagement, and creative outreach.",
    order: 4
  },
  {
    id: "operations-secretary",
    name: "Riya",
    role: "Operations Secretary",
    category: "Executive Board",
    image: "/images/team/exec_operations-secretary.jpg",
    handle: "@riaaa_2507",
    instagramUrl: "https://www.instagram.com/wdc.mlnc/p/DboRpP4S7YX/",
    bio: "Managing cross-functional event planning and day-to-day execution.",
    order: 5
  },
  {
    id: "outreach-secretary",
    name: "Mitanshi",
    role: "Outreach Secretary",
    category: "Executive Board",
    image: "/images/team/exec_outreach-secretary.jpg",
    handle: "@mitanshhiii",
    instagramUrl: "https://www.instagram.com/wdc.mlnc/p/DboRVNfSzJu/",
    bio: "Fostering inter-college solidarity, speaker coordination, and community circles.",
    order: 6
  },
  {
    id: "rd-head",
    name: "Disha",
    role: "Research & Development Head",
    category: "Executive Board",
    image: "/images/team/exec_rd-head.jpg",
    handle: "@gulmoharketale",
    instagramUrl: "https://www.instagram.com/wdc.mlnc/p/DboRBKnys3e/",
    bio: "Directing policy research, discourse literature, and analytical initiatives.",
    order: 7
  },
  {
    id: "operations-head",
    name: "Drishti",
    role: "Operations Head",
    category: "Executive Board",
    image: "/images/team/exec_operations-head.jpg",
    handle: "@drissshtyyyy",
    instagramUrl: "https://www.instagram.com/wdc.mlnc/p/DboQpYRSS6Q/",
    bio: "Leading logistics, venue coordination, and on-ground team management.",
    order: 8
  },
  {
    id: "marketing-head",
    name: "Shubham",
    role: "Marketing Head",
    category: "Executive Board",
    image: "/images/team/exec_marketing-head.jpg",
    handle: "@nw.shubh.nvm",
    instagramUrl: "https://www.instagram.com/wdc.mlnc/p/DboP99ty_P-/",
    bio: "Driving campaign promotion, brand identity, and audience growth.",
    order: 9
  }
];
