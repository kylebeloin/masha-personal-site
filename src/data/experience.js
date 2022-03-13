import { List, Header, Accordion, Segment, Label } from "semantic-ui-react";

export const experience = [
  {
    category: "Teaching",
    data: [
      {
        section: "Instructor",
        active: "2021",
        employer: "Northern Arizona University",
        location: "Flagstaff, AZ",
        role: "Instructor",
        title: {
          primary:
            "BME 480, Parent and Community Involvement in ESL and	Bilingual Programs",
          secondary: "",
        },
        responsibilities: [
          "Taught one section of sixty undergraduate students in China",
          "Prepared and conducted synchronous sessions on Zoom",
          "Developed the syllabus for the course",
          "Created and graded assignments in the class including the final project",
          "Provided feedback on students' work throughout the course",
        ],
      },
      {
        active: "2016-2021",
        employer: "Northern Arizona University",
        location: "Flagstaff, AZ",
        role: "Instructor",
        title: {
          primary: "ENG 105 and ENG 205, Introductory English composition",
          secondary: "",
        },
        responsibilities: [
          "Taught up to three sections of undergraduate students with mixed first language backgrounds (English, Arabic, Chinese) each semester",
          "Developed students' critical reading and writing skills",
          "Planned and conducted in-person class sessions",
          "Designed and conducted blended learning as well as online classes using BbLearn platform",
          "Gave feedback on students' performance and papers",
          "Taught students how to produce academic-level writing",
          "Held individual meetings with students during office hours",
          "Mentored first-year and second-year teaching assistants",
        ],
      },
      {
        active: "2020",
        employer: "Northern Arizona University",
        location: "Flagstaff, AZ",
        role: "Instructor",
        title: {
          primary: "ENG 559, ESL: Reading and Writing",
          secondary: "",
        },
        responsibilities: [
          "Taught methods of teaching ESL reading and writing to graduate-level students",
          "Selected relevant state-of-the-art readings for the course",
          "Planned and conducted in-person class sessions",
          "Developed weekly material development exercises and writing assignments to help students develop their teaching skills",
          "Prepared online lessons based on the readings and lectures",
          "Gave feedback and graded students' assignments",
        ],
      },
      {
        active: "2012-2015",
        employer: "School of Foreign Languages",
        location: "Penza, Russia",
        role: "Instructor",
        title: {
          primary: "English as a Foreign Language Teacher",
          secondary: "",
        },
        responsibilities: [
          "Taught English as a foreign language to adults at various proficiency levels",
          "Created curriculum for EFL classes of different levels",
          "Created diagnostic, mid-year, and end-of-year assessments",
          "Planned lessons and study programs for students",
          "Led an English for academic purposes class",
          "Prepared students for TOEFL and IELTS",
          "Organized extracurricular activities",
        ],
      },
      {
        section: "Teaching Assistant",
        active: "2022",
        employer: "Northern Arizona University",
        location: "Flagstaff, AZ",
        role: "Teaching Assistant",
        title: { primary: "ENG 528, Introduction to Grammar", secondary: "" },
        responsibilities: [
          "Assisted in creating course materials and leading class sessions",
          "Led review sessions for students in the class",
          "Monitored and managed online students in the class",
        ],
      },
      {
        section: "Writing Assistant",
        active: "2016-2017",
        employer: "Northern Arizona University",
        location: "Flagstaff, AZ",
        role: "Writing Assistant",
        title: {
          primary: "ENG 100, English Composition: Writing Center",
          secondary: "University Writing Commons",
        },
        responsibilities: [
          "Met with students one-on-one to work on their writing - Edited papers of students from various departments",
          "Gave workshops on different aspects of the writing process (e.g., Outlining, paragraph structure, brainstorming)",
        ],
      },
    ],
  },
  {
    category: "Research",
    data: [
      {
        active: "2017-present",
        employer: "Flagstaff Literacy Center",
        location: "Flagstaff, AZ",
        role: "Test Developer & Volunteer",
        title: {
          primary: "Test Developer & Volunteer",
          secondary: "",
        },
        responsibilities: [
          "Developed a placement test for new adult ESL learners",
          "Piloted the developed the test with the literacy center students",
          "Examined the predictive validity of the developed test using a mixed-methods approach",
          "Conducted training sessions for the literacy center volunteers",
        ],
      },
      {
        active: "2021-present",
        employer: "Northern Arizona University",
        location: "Flagstaff, AZ",
        role: "Research Assistant",
        title: {
          primary: "Research Assistant",
          secondary: "under the supervision of Dr. Okim Kang",
        },
        responsibilities: [
          "Build and test a listening test for a project that investigates the fairness of including L2 accents in listening sections of the Duolingo English Test",
          "Build a questionnaire measuring participants attitudes toward different L2 accents",
          "Recruit participants for the project from different L2 backgrounds",
          "Conduct quantitative and qualitative data analyses",
        ],
      },
      {
        active: "2020",
        employer: "Northern Arizona University",
        location: "Flagstaff, AZ",
        role: "Research Assistant",
        title: {
          primary: "Research Assistant",
          secondary: "under the supervision of Dr. Naoko Taguchi",
        },
        responsibilities: [
          "Transcribed and analyzed spoken data",
          "Coded the data using established pragma-linguistic frameworks",
        ],
      },
      {
        active: "2017-2019",
        employer: "Northern Arizona University",
        location: "Flagstaff, AZ",
        role: "Research Assistant",
        title: {
          primary: "Language and Memory Lab",
          secondary: "under the supervision of Dr. Vedran Dronjic",
        },
        responsibilities: [
          "Transcribed and analyzed spoken data",
          "Administered working memory measurements using experiment software (LlamaB, KBIT-2) as well as post-task participant questionnaires",
          "Coded and analyzed collected data quantitatively and qualitatively",
          "Managed the paperwork for the experiments",
        ],
      },
      {
        active: "2015-2016",
        employer: "Bonn University",
        location: "Bonn, Germany",
        role: "Research Assistant",
        title: {
          primary: "Research Assistant",
          secondary: "Pragmatics Laboratory",
        },
        responsibilities: [
          "Administered pragmatic profiling questionnaires",
          "Helped code empirical data representing participants' pragmatic production",
        ],
      },
    ],
  },
];

export const experienceElement = (experience, i) => {
  let panes = [
    {
      key: `experience-responsibilities-${i}`,
      title: "Responsibilities",
      content: {
        content: (
          <Segment basic style={{ padding: "0 1em" }}>
            <List as={"ul"}>
              {experience.responsibilities.map((responsibility, x) => (
                <List.Item key={`responsibilities-${i}-${x}`} as="li">
                  <p>{responsibility}</p>
                </List.Item>
              ))}
            </List>
          </Segment>
        ),
      },
    },
  ];
  let el = (
    <Header key={`experience-container-${i}`} size="small">
      <Header.Subheader>
        <p style={{ marginBottom: "0" }}>
          {experience.role}{" "}
          <span className="year--emphasis">({experience.active})</span>
        </p>
      </Header.Subheader>
      <Header
        key={`experience-title-${i}`}
        className={"disabled__link"}
        size="tiny"
        as={"a"}
        href={experience?.link ? experience.link : ""}
        target={"_blank"}
        onClick={experience?.link ? null : (event) => event.preventDefault()}
      >
        {experience.title.primary}
        {experience.title.secondary !== "" &&
          ` - ${experience.title.secondary}`}{" "}
      </Header>
      <Header.Subheader>
        <p
          style={{
            marginBottom: "0",
            marginTop: "0.5rem",
            marginLeft: "auto",
            fontWeight: "400",
          }}
        >
          {experience.employer} {", "}
          {experience.location}
        </p>
        <Accordion panels={panes} />
      </Header.Subheader>
    </Header>
  );
  if (experience?.section !== undefined) {
    el = (
      <>
        <Label color="red" ribbon>
          {experience.section}
        </Label>
        {el}
      </>
    );
  }
  return el;
};
