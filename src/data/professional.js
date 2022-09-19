export const professional = [
  {
    active: [2021, 2022],
    employer: "Flagstaff Literacy Center",
    location: "Flagstaff, AZ",
    link: "https://thinkliteracy.org/",
    title: {
      primary: "Children and Family Literacy Coordinator",
      secondary: "",
    },
    responsibilities: [
      "Development and supervision of the literacy program for children in local elementary schools",
      "Volunteer recruitment and training",
      "Facilitation, fostering, and maintenance of community partnerships",
    ],
  },
  {
    active: [2022],
    employer: "Educational Testing Services (ETS)",
    location: "Princeton, NJ",
    link: "https://www.ets.org/",
    title: {
      primary: "Summer Institute Associate",
      secondary: "",
    },
    responsibilities: ["Writing of test items for TOEIC Listening"],
  },

  {
    active: [2022],
    employer: "Northern Arizona University",
    location: "Flagstaff, AZ",
    title: {
      primary: "Project Assistant",
      secondary: "PI: Dr. Romy Ghanem, Project: Pronunciation Clinic",
    },
    responsibilities: [
      "Developed instructional materials",
      "Recorded of lectures",
      "Created of practice activities",
    ],
  },
  {
    active: [2017, 2018, 2019, 2020, 2021, 2022],
    employer: "Flagstaff Literacy Center",
    location: "Flagstaff, AZ",
    link: "https://thinkliteracy.org/",
    title: {
      primary: "Test Developer",
      secondary: "",
    },
    responsibilities: [
      "Developed a placement test for new adult ESL learners",
      "Piloted the developed test with the literacy center students",
      "Examined the predictive validity of the developed test using a mixed-methods approach",
      "Conducted training sessions for the literacy center volunteers",
    ],
  },
];

export const sortProfessional = (a, b) => {
  const aStart = Math.max(a.active);
  const bStart = Math.max(b.active);
  return aStart - bStart;
};
