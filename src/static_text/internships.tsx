export interface InternshipSection {
    title: string;
    description: string[];
    imagePosition: 'left' | 'right';
  }
  
  const internships: InternshipSection[] = [
    {
      title: "Sea Time & Watch Keeping",
      description: [
        "✦ 100 Nautical Miles Logged Sea Time on 48ft SV Voyager",
        "✦ Watch Keeping and Trip Log Keeping / Night Watch",
        "✦ Introduction / Meet and Greet (Opening Sail / Cruise)",
        "✦ Crew as Working Deckhand on Guest Trips (Extra Mileage)"
      ],
      imagePosition: "right"
    },
    {
      title: "Sailing & Navigation",
      description: [
        "✦ Level 1 Dinghy Sailing Course (Theory and Practical)",
        "✦ Sailing and Knots",
        "✦ Basic Rigging and Mast Work",
        "✦ Entry Level Chart Work (Theory and Practical Application)",
        "✦ Anchoring Techniques / Mooring",
        "✦ Tender Operations / Docking Techniques",
        "✦ Chartering Ethics, Guest Relations, and Appearance"
      ],
      imagePosition: "left"
    },
    {
      title: "Vessel Operations & Maintenance",
      description: [
        "✦ Vessel Familiarization (Deck Layout, Emergency Equipment, Plumbing, Electrical Wiring, Instruments, Ropes, and Mooring Lines)",
        "✦ Diesel Engine Basic Maintenance and Service",
        "✦ Stainless Steel Polish and Maintenance",
        "✦ Full Wash Down and Detailing of Yacht, Charter Preparation"
      ],
      imagePosition: "right"
    },
    {
      title: "Emergency Procedures & Safety",
      description: [
        "✦ Emergency Drills (Theory and Practical)",
        "✦ MOB (Man Overboard) Emergency Drill (Theory and Practical)",
        "✦ Radio Procedures (Theory and Practical)"
      ],
      imagePosition: "left"
    },
    {
      title: "Diving & Water Activities",
      description: [
        "✦ Go Dive NAUI Worldwide DSD Full Day Scuba (Theory and Practical)",
        "✦ Navi Divemaster Training (Optional)",
        "✦ Deep Sea Fishing Trip, Basic Knots, and Tacklee"
      ],
      imagePosition: "right"
    },
    {
      title: "Certifications & Optional Training",
      description: [
        "✦ Category C SAMSA Skippers Ticket (Optional)",
        "✦ VHF Radio Course (Optional)"
      ],
      imagePosition: "left"
    },
    {
      title: "Community & Social",
      description: [
        "✦ SAPREC Social Responsibility Full Day Volunteering"
      ],
      imagePosition: "right"
    }
  ];
  
  export default internships;