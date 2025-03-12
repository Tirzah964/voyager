export interface CourseDetail {
    title: string;
    description: string;
    duration: string;
    price: string;
    requirements: string;
  }
  
  const courseDetails: CourseDetail[] = [
    {
      title: "Stewardess Course",
      description:
        "Our comprehensive Stewardess Course prepares you for a career in luxury yacht service. Learn interior management, silver service, wine knowledge, flower arranging, and guest relations. This 4-week intensive program includes hands-on training and certification recognized by leading yacht management companies worldwide.",
      duration: "4 weeks",
      price: "R2,500",
      requirements: "No prior experience required. Must be 18+ years old.",
    },
    {
      title: "Deckhand Course",
      description:
        "The Deckhand Course focuses on essential skills for maintaining and operating luxury yachts. Training includes rope work, navigation basics, tender operations, maintenance procedures, and safety protocols. Graduates receive certification and job placement assistance with our network of yacht captains and management companies.",
      duration: "3 weeks",
      price: "R2,200",
      requirements: "Basic swimming ability required. Must be 18+ years old.",
    },
    {
      title: "Engineering Course",
      description:
        "Our Engineering Course provides fundamental knowledge of yacht systems and maintenance. Learn about electrical systems, plumbing, engines, generators, and troubleshooting common issues. This course combines classroom theory with hands-on practice in our fully equipped workshop, preparing you for AY3 certification.",
      duration: "6 weeks",
      price: "R3,500",
      requirements:
        "Basic mechanical aptitude recommended. Must be 18+ years old.",
    },
  ];
  
  export default courseDetails;