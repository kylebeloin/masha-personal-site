/**
@typedef {Object} Section
@property {int|null} year
@property {string|null} semester
@property {string|null} mode
@property {int} total

@typedef {Object} Course
@property {string|null} subject
@property {int|null} number
@property {string} institution
@property {string} location
@property {string|null} level
@property {string} title
@property {string} role
@property {int|null} hours
@property {Section[]} sections
@property {string} [description]

@typedef {Course[]} Teaching
*/

/**
 * @type {Teaching}
 * @constant
 * @default
 * @description
 * This is a list of courses I have taught.
 *
 * The `sections` property is an array of objects that describe the sections of the course.
 * */
export const teaching = [
  {
    type: "teaching",
    subject: "ENG",
    number: 559,
    institution: "Northern Arizona University",
    location: "Flagstaff, AZ",
    level: "University",
    title: "ESL Methods and Materials: Reading and Writing",
    role: "Instructor",
    hours: 3,
    sections: [
      {
        year: 2020,
        semester: "Summer",
        mode: "online",
        total: 1,
      },
    ],
  },
  // ENG 538: Cross-Cultural Aspects of Language Learning
  {
    subject: "ENG",
    type: "teaching",
    number: 538,
    title: "Cross-Cultural Aspects of Language Learning",
    institution: "Northern Arizona University",
    location: "Flagstaff, AZ",
    level: "University",
    role: "Instructor",
    hours: 3,
    sections: [
      {
        year: 2022,
        semester: "Summer",
        mode: "online",
        total: 1,
      },
    ],
  },
  {
    // BME 480: Parent and Community Involvement in ESL and Bilingual Programs Winter 2021 (online)
    subject: "BME",
    type: "teaching",
    number: 480,
    title: "Parent and Community Involvement in ESL and Bilingual Programs",
    institution: "Northern Arizona University",
    location: "Flagstaff, AZ",
    level: "University",
    role: "Instructor",
    hours: 3,
    sections: [
      {
        year: 2021,
        semester: "Winter",
        mode: "online",
        total: 1,
      },
    ],
  },
  {
    subject: "ENG",
    type: "teaching",
    number: 205,
    title: "The Academic Writer's Workshop",
    // Fall 2017; Spring 2018; Summer 2018 (hybrid)
    institution: "Northern Arizona University",
    location: "Flagstaff, AZ",
    level: "University",
    role: "Instructor",
    hours: 2,
    sections: [
      {
        year: 2018,
        semester: "Summer",
        mode: "online",
        total: 1,
      },
      {
        year: 2018,
        semester: "Spring",
        mode: "hybrid",
        total: 1,
      },
      {
        year: 2017,
        semester: "Fall",
        mode: "hybrid",
        total: 1,
      },
    ],
  },
  {
    type: "teaching",
    subject: "ENG",
    number: 105,
    title: "Critical Reading and Writing in the University Community",
    institution: "Northern Arizona University",
    location: "Flagstaff, AZ",
    level: "University",
    role: "Instructor",
    hours: 4,
    sections: [
      {
        year: 2021,
        semester: "Spring",
        mode: null,
        total: 1,
      },
      {
        year: 2020,
        semester: "Fall",
        mode: null,
      },
      {
        year: 2020,
        mode: null,
        semester: "Spring",
        total: 1,
      },
      {
        year: 2019,
        semester: "Fall",
        mode: null,
        total: 1,
      },
      {
        year: 2019,
        semester: "Spring",
        mode: null,
        total: 3,
      },
      {
        year: 2018,
        semester: "Fall",
        mode: null,
        total: 3,
      },
      {
        year: 2017,
        semester: "Summer",
        mode: null,
        total: 1,
      },
      {
        year: 2017,
        semester: "Spring",
        mode: null,
        total: 1,
      },
      {
        year: 2016,
        semester: "Fall",
        mode: null,
        total: 1,
      },
    ],
  },
  {
    type: "teaching",
    subject: "ENG",
    number: 100,
    title: "Individualized Writing Instruction",
    institution: "Northern Arizona University",
    location: "Flagstaff, AZ",
    level: "University",
    role: "Instructor",
    hours: 1,
    sections: [
      {
        year: 2017,
        semester: "Spring",
        mode: null,
        total: 1,
      },
      {
        year: 2016,
        semester: "Fall",
        mode: null,
        total: 1,
      },
    ],
  },
  // Teaching Assistant
  {
    // ENG 528: Grammatical Foundations
    // Spring 2022
    type: "teaching",
    subject: "ENG",
    number: 528,
    title: "Grammatical Foundations",
    institution: "Northern Arizona University",
    location: "Flagstaff, AZ",
    level: "University",
    role: "Teaching Assistant",
    hours: 3,
    sections: [
      {
        year: 2022,
        semester: "Spring",
        mode: null,
        total: 1,
      },
    ],
  },
  //  ENG 308: Introduction to Linguistics
  // Fall 2022
  {
    type: "teaching",
    subject: "ENG",
    number: 308,
    title: "Introduction to Linguistics",
    role: "Teaching Assistant",
    institution: "Northern Arizona University",
    location: "Flagstaff, AZ",
    level: "University",
    hours: 3,
    sections: [
      {
        year: 2022,
        semester: "Fall",
        mode: null,
        total: 1,
      },
    ],
  },
  // Intensive English Programs
  {
    type: "teaching",
    subject: "ENG",
    number: 105,
    title:
      "Critical Reading and Writing in the University Community (international students)",
    institution: "Northern Arizona University",
    location: "Flagstaff, AZ",
    level: "Intensive English Programs",
    role: "Instructor",
    hours: 4,
    sections: [
      {
        year: 2019,
        semester: "Spring",
        mode: null,
        total: 1,
      },
      {
        year: 2018,
        semester: "Fall",
        mode: null,
        total: 1,
      },
    ],
  },
  // Language Schools
  {
    type: "teaching",
    subject: null,
    number: null,
    title: "Business English (individual and group classes)",
    institution: "School of Foreign Languages No. 1",
    location: "Penza, Russia",
    level: "Language Schools",
    role: "Instructor",
    hours: null,
    sections: [
      {
        year: 2015,
        semester: null,
        mode: null,
        total: 1,
      },
      {
        year: 2014,
        semester: null,
        mode: null,
        total: 1,
      },
      {
        year: 2013,
        semester: null,
        mode: null,
        total: 1,
      },
    ],
  },
  {
    type: "teaching",
    subject: null,
    number: null,
    title: "TOEFL preparation (individual and group classes)",
    institution: "School of Foreign Languages No. 1",
    location: "Penza, Russia",
    level: "Language Schools",
    role: "Instructor",
    hours: null,
    sections: [
      {
        year: 2015,
        semester: null,
        mode: null,
        total: 1,
      },
      {
        year: 2014,
        semester: null,
        mode: null,
        total: 1,
      },
      {
        year: 2013,
        semester: null,
        mode: null,
        total: 1,
      },
    ],
  },
  {
    type: "teaching",
    subject: null,
    number: null,
    title: "IELTS preparation (individual and group classes)",
    institution: "School of Foreign Languages No. 1",
    location: "Penza, Russia",
    level: "Language Schools",
    role: "Instructor",
    hours: null,
    sections: [
      {
        year: 2015,
        semester: null,
        mode: null,
        total: 1,
      },
      {
        year: 2014,
        semester: null,
        mode: null,
        total: 1,
      },
      {
        year: 2013,
        semester: null,
        mode: null,
        total: 1,
      },
    ],
  },
  {
    type: "teaching",
    subject: null,
    number: null,
    title: "Unified State Exam preparation (individual and group classes)",
    institution: "School of Foreign Languages No. 1",
    location: "Penza, Russia",
    level: "Language Schools",
    role: "Instructor",
    hours: null,
    sections: [
      {
        year: 2015,
        semester: null,
        mode: null,
        total: 1,
      },
      {
        year: 2014,
        semester: null,
        mode: null,
        total: 1,
      },
      {
        year: 2013,
        semester: null,
        mode: null,
        total: 1,
      },
    ],
  },
  {
    type: "teaching",
    subject: null,
    number: null,
    title:
      "English Integrated Skills for Beginners (individual and group classes for children and adults)",
    institution: "School of Foreign Languages No. 1",
    location: "Penza, Russia",
    level: "Language Schools",
    role: "Instructor",
    hours: null,
    sections: [
      {
        year: 2015,
        semester: null,
        mode: null,
        total: 1,
      },
      {
        year: 2014,
        semester: null,
        mode: null,
        total: 1,
      },
      {
        year: 2013,
        semester: null,
        mode: null,
        total: 1,
      },
      {
        year: 2012,
        semester: null,
        mode: null,
        total: 1,
      },
    ],
  },
  {
    type: "teaching",
    subject: null,
    number: null,
    title: "English Integrated Skills for Intermediate Learners",
    institution: "School of Foreign Languages No. 1",
    location: "Penza, Russia",
    level: "Language Schools",
    role: "Instructor",
    hours: null,
    sections: [
      {
        year: 2015,
        semester: null,
        mode: null,
        total: 1,
      },
      {
        year: 2014,
        semester: null,
        mode: null,
        total: 1,
      },
      {
        year: 2013,
        semester: null,
        mode: null,
        total: 1,
      },
      {
        year: 2012,
        semester: null,
        mode: null,
        total: 1,
      },
    ],
  },
  {
    type: "teaching",
    subject: null,
    number: null,
    title: "English Integrated Skills for Advanced Learners",
    institution: "School of Foreign Languages No. 1",
    location: "Penza, Russia",
    level: "Language Schools",
    role: "Instructor",
    hours: null,
    sections: [
      {
        year: 2015,
        semester: null,
        mode: null,
        total: 1,
      },
      {
        year: 2014,
        semester: null,
        mode: null,
        total: 1,
      },
      {
        year: 2013,
        semester: null,
        mode: null,
        total: 1,
      },
      {
        year: 2012,
        semester: null,
        mode: null,
        total: 1,
      },
    ],
  },
  {
    type: "teaching",
    subject: null,
    number: null,
    title:
      "German Integrated Skills for Beginners (individual and group classes for children and adults)",
    institution: "School of Foreign Languages No. 1",
    location: "Penza, Russia",
    level: "Language Schools",
    role: "Instructor",
    hours: null,
    sections: [
      {
        year: 2015,
        semester: null,
        mode: null,
        total: 1,
      },
      {
        year: 2014,
        semester: null,
        mode: null,
        total: 1,
      },
      {
        year: 2013,
        semester: null,
        mode: null,
        total: 1,
      },
      {
        year: 2012,
        semester: null,
        mode: null,
        total: 1,
      },
    ],
  },
  {
    type: "teaching",
    subject: null,
    number: null,
    title: "German Integrated Skills for Intermediate Learners",
    institution: "School of Foreign Languages No. 1",
    location: "Penza, Russia",
    level: "Language Schools",
    role: "Instructor",
    hours: null,
    sections: [
      {
        year: 2015,
        semester: null,
        mode: null,
        total: 1,
      },
      {
        year: 2014,
        semester: null,
        mode: null,
        total: 1,
      },
      {
        year: 2013,
        semester: null,
        mode: null,
        total: 1,
      },
      {
        year: 2012,
        semester: null,
        mode: null,
        total: 1,
      },
    ],
  },
  {
    type: "teaching",
    subject: null,
    number: null,
    title: "Russian Integrated Skills for Beginners",
    institution: "School of Foreign Languages No. 1",
    location: "Penza, Russia",
    level: "Language Schools",
    role: "Instructor",
    hours: null,
    sections: [
      {
        year: 2015,
        semester: null,
        mode: null,
        total: 1,
      },
      {
        year: 2014,
        semester: null,
        mode: null,
        total: 1,
      },
      {
        year: 2013,
        semester: null,
        mode: null,
        total: 1,
      },
      {
        year: 2012,
        semester: null,
        mode: null,
        total: 1,
      },
    ],
  },
  // High Schools
  {
    type: "teaching",
    subject: null,
    number: null,
    title:
      "English Reading and Writing  (Content-based instruction with a focus on Climate Change)",
    institution: "Upward Bound Academy, Northern Arizona University",
    location: "Flagstaff, AZ",
    level: "High School",
    role: "Instructor",
    hours: null,
    sections: [
      {
        year: 2022,
        semester: "Summmer",
        mode: null,
        total: 1,
      },
      {
        year: 2021,
        semester: "Summmer",
        mode: null,
        total: 1,
      },
      {
        year: 2020,
        semester: "Summmer",
        mode: null,
        total: 1,
      },
      {
        year: 2019,
        semester: "Summmer",
        mode: null,
        total: 1,
      },
      {
        year: 2018,
        semester: "Summmer",
        mode: null,
        total: 1,
      },
    ],
  },
];

const sortTeachingByLevel = (level) => {
  switch (level) {
    case "University":
      return 9999;
    case "Intensive English Programs":
      return 9999;
    case "Language Schools":
      return 9998;
    case "High School":
      return 9997;
    default:
      return 9996;
  }
};

export const sortTeaching = (a, b) => {
  return sortTeachingByLevel(b.level) - sortTeachingByLevel(a.level);
};
