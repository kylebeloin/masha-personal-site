import { Header } from "semantic-ui-react";

export const presentations = [
  {
    year: "2022",
    title: {
      primary:
        "Prosody of L1 and L2 English speakers’ pragmatic production of high imposition requests and refusals",
      secondary: "",
    },
    with: [],
    conference: "AAAL 2022 Conference",
    location: "Pittsburgh, PA",
    format: "poster",
  },
  {
    year: "2022",
    title: {
      primary:
        "Role of prosody in perceptions of politeness in L1 and L2 English requests and refusals",
      secondary: "",
    },
    with: [],
    conference: "AAAL 2022 Conference",
    location: "Pittsburgh, PA",
    format: "oral presentation",
  },
  {
    year: "2021",
    title: {
      primary:
        "Elicited Imitation Tasks as a Measure of L2 Proficiency: A Meta- Analysis",
      secondary: "A Meta-Analysis",
    },
    with: ["Plonsky, L."],
    conference: "AAAL 2021 Conference",
    location: "Pittsburgh, PA (Online)",
    format: "oral presentation",
  },
  {
    year: "2020",
    title: {
      primary:
        "Explicit Prosodic Priming of Relative Clause Attachment Preferences in L1 and L2 English Speakers",
      secondary: "",
    },
    with: [],
    conference: "SLRF 2020",
    location: "Nashville, TN (Online)",
    format: "oral presentation",
  },
  {
    year: "2020",
    title: {
      primary:
        "From Corpus to Classroom: Evaluating Web-based Tools to Teach Collocations",
      secondary: "",
    },
    with: ["Goulart, L."],
    conference: "AZ-CALL",
    location: "Phoenix, AZ (Online)",
    format: "oral presentation",
  },
  {
    year: "2020",
    title: {
      primary:
        "Corpus-driven Investigation of Lexical Bundles in Online User-generated Reviews",
      secondary: "",
    },
    with: [],
    conference: "TESOL Convention Doctoral Forum",
    location: "Denver, CO (Online)",
    format: "oral presentation",
  },
  {
    year: "2020",
    title: {
      primary:
        "Establishing a Writing Community Through Interactive Personal Blogs",
      secondary: "",
    },
    with: [],
    conference: "ASU 2020 Composition Conference",
    location: "Tempe, AZ",
    format: "oral presentation",
  },
  {
    year: "2019",
    title: {
      primary:
        "Nine Activities to Enhance Writing Processes through Community Building",
      secondary: "",
    },
    with: ["Campbell, D."],
    conference: "TESOL Convention",
    location: "Atlanta, GA",
    format: "oral presentation",
  },
  {
    year: "2019",
    title: {
      primary:
        "Designing Flexible Placement Tests for Adult English Language Learners",
      secondary: "",
    },
    with: ["Campbell, D."],
    conference: "TESOL Convention",
    location: "Atlanta, GA",
    format: "oral presentation",
  },
  {
    year: "2018",
    title: {
      primary: "Pause, Inhale, Speak",
      secondary:
        "Meaningful Pauses to Improve ESL Instructors' Comprehensibility",
    },
    with: ["Campbell, D."],
    conference: "TESOL Convention Masters Forum",
    location: "Chicago, IL",
    format: "oral presentation",
  },
  {
    year: "2018",
    title: {
      primary:
        "Pragmatics of Service Encounter Requests in English, German, and Russian",
      secondary: "",
    },
    with: [],
    conference:
      "Sixth International Conference on the Development and Assessment of Intercultural Competence",
    location: "Tempe, AZ",
    format: "oral presentation",
  },
  {
    year: "2017",
    title: {
      primary: "Building Bonds",
      secondary: "Activities for Building Community in the Classroom",
    },
    with: ["Campbell, D."],
    conference: "AZTESOL Conference",
    location: "Tucson, AZ",
    format: "oral presentation",
  },
  {
    year: "2017",
    title: {
      primary:
        "Eclectic and Adaptable Vocabulary Practices in the Second Language Classroom",
      secondary: "",
    },
    with: ["Campbell, D."],
    conference: "AZTESOL/GSAAL Conference",
    location: "Flagstaff, AZ",
    format: "oral presentation",
  },
  {
    year: "2017",
    title: {
      primary:
        "Task Factors Influencing Complexity, Accuracy, and Fluency in Oral L2 Production",
      secondary: "",
    },
    with: [],
    conference: "PEAKS Interdisciplinary Conference",
    location: "Flagstaff, AZ",
    format: "oral presentation",
  },
  {
    year: "2016",
    title: {
      primary: "Analysis of Service Encounter Requests in Russian and German",
      secondary: "",
    },
    with: [],
    conference: "BAELc5, Bonn Applied English Linguistics Conference",
    location: "Bonn, Germany",
    format: "oral presentation",
  },
  {
    year: "2015",
    title: {
      primary: "The Problem of Standards in Higher Education",
      secondary: "",
    },
    with: [],
    conference: "Russian International Studies Association Convent",
    location: "Moscow, Russia",
    format: "oral presentation",
  },
];

export const presentationElement = (presentation, i) => {
  let el;

  el = (
    <Header key={`presentation-container-${i}`} size="small">
      <Header.Subheader>
        <p style={{ marginBottom: "0" }}>
          {presentation.conference}{" "}
          <span class="year--emphasis">({presentation.year})</span>
        </p>
      </Header.Subheader>
      <Header
        key={`presentation-title-${i}`}
        size="tiny"
        className={`presentation__link ${
          !presentation.link ? "disabled__link" : ""
        }`}
        as={"a"}
        href={presentation.link ? presentation.link : ""}
        target={"_blank"}
        onClick={presentation.link ? null : (event) => event.preventDefault()}
      >
        {presentation.title.primary}
        {presentation.title.secondary !== "" &&
          `: ${presentation.title.secondary}`}
      </Header>
      <Header.Subheader key={`presentation-location-${i}`}>
        {presentation["with"].length !== 0 && (
          <p style={{ marginBottom: "0" }}>
            {"Presented with "}
            {`${presentation["with"].reduce((prev, curr, i) => {
              return i === 0 ? curr : prev + ", " + curr;
            }, "")}`}{" "}
          </p>
        )}

        <p style={{ marginBottom: "0" }}>
          {presentation.location} ({presentation.format})
        </p>
      </Header.Subheader>
    </Header>
  );
  return el;
};
