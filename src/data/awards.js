export const awards = [
  {
    year: "2022",
    name: "The Graduate Student Government Scholarship",
    by: "Graduate Student Government",
    institution: "Northern Arizona University",
    amount: "2,000",
    type: "award",
  },
  {
    year: "2022",
    name: "Graduate Student Support Grant",
    by: "BYU Law & Corpus Linguistics",
    institution: "Brigham Young University",
    amount: 750,
    type: "award",
  },
  {
    year: "2022",
    name: "Graduate Student Award",
    by: "Pronunciation in Second Language Learning and Teaching",
    institution: "PSLLT",
    amount: 750,
    type: "award",
  },
  {
    year: "2021",
    name: "Patricia Mapes Andersen Scholarship",
    by: "English Department, College of Arts and Letters",
    institution: "Northern Arizona University",
    amount: 500,
    type: "award",
  },
  {
    year: "2021",
    name: "Gary Kenneth Buettner Scholarship",
    by: "English Department, College of Arts and Letters",
    institution: "Northern Arizona University",
    amount: 325,
    type: "award",
  },
  {
    year: "2021",
    name: "Travel Award",
    by: "Graduate Student Government",
    institution: "Northern Arizona University",
    type: "award",
  },
  {
    year: "2020",
    name: "Outstanding Teaching Assistant Award Nominee",
    by: "English Department, College of Arts and Letters",
    institution: "Northern Arizona University",
    type: "award",
  },
  {
    year: "2020",
    name: "Gary Kenneth Buettner Scholarship",
    by: "English Department, College of Arts and Letters",
    institution: "Northern Arizona University",
    amount: "3,150",
    type: "award",
  },
  {
    year: "2018",
    name: "Cheryl Walsh Professional Growth Award",
    by: "English Department, College of Arts and Letters",
    institution: "Northern Arizona University",
    type: "award",
    amount: 750,
  },
  {
    year: "2017",
    name: "S.H. Shot Award",
    by: "English Department, College of Arts and Letters",
    institution: "Northern Arizona University",
    amount: "1,600",
    type: "award",
  },
  {
    year: "2017",
    name: "Dennis Oliver Travel Assistance Grant",
    by: "AZTESOL",
    institution:
      "Arizona Association of Teachers of English as a Second Language",
    type: "award",
  },
  // Fellowships
  {
    year: "2019 - 2023",
    name: "Merit-based graduate assistantship and full tuition waiver",
    by: "English Department, College of Arts and Letters",
    institution: "Northern Arizona University",
    type: "fellowship",
  },
  {
    year: "2016 - 2018",
    name: "Merit-based graduate assistantship and full tuition waiver",
    by: "English Department, College of Arts and Letters",
    institution: "Northern Arizona University",
    type: "fellowship",
  },
  {
    year: "2007 - 2012",
    name: "Dean's High Honor List",
    by: "Office of the Dean",
    institution: "Penza State Pedagogical University",
    type: "fellowship",
  },
  {
    year: "2022 - 2023",
    name: "Equity, diversity, and inclusion: Different varieties of accents in Aptis English listening tests",
    by: "The British Council Assessment Research Grant",
    type: "grant",
    role: "Co-PI with Okim Kang",
    amount: "28,385",
  },
  {
    year: "2022",
    name: "TIRF Doctoral Dissertation Grant",
    by: "The International Research Foundation for English Language Education",
    link: "https://www.tirfonline.org/doctoral-dissertation-grants/",
    type: "grant",
    amount: "3,250",
  },
  {
    year: "2022",
    name: "NFMLTA-MLJ Graduate Dissertation Writing Support Grant",
    by: "National Federation of Modern Language Teachers Associations",
    link: "",
    type: "grant",
    amount: "2,500",
  },
  {
    year: "2022",
    name: "Duolingo Research Grant",
    by: "Duolingo",
    link: "https://blog.duolingo.com/p/afdd21ae-2e18-4628-b5fe-d2c7ad484f89/",
    type: "grant",
    amount: "5,000",
  },
  {
    year: "2022",
    name: "Language Learning Dissertation Grant",
    by: "Language Learning",
    type: "grant",
    amount: "1,750",
  },
  {
    year: "2021",
    name: "Support for Graduate Students",
    by: "Office of the Vice President for Research",
    type: "grant",
    amount: "1,500",
    institution: "Northern Arizona University",
  },
];

export default awards;

const sortAwardsByYear = (years) => {
  let year = years.split("-");
  if (year.length > 1) {
    return Math.max(year);
  } else {
    return year;
  }
};

const sortAwardsByType = (type) => {
  switch (type) {
    case "grant":
      return 9999;
    case "award":
      return 9998;
    case "fellowship":
      return 9997;
    default:
      return 9996;
  }
};

export const sortAwards = (a, b) => {
  return (
    sortAwardsByType(b.type) - sortAwardsByType(a.type) ||
    sortAwardsByYear(b.year) - sortAwardsByYear(a.year)
  );
};
