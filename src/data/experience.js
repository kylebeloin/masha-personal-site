import { List, Header, Accordion, Segment, Label } from "semantic-ui-react";

export const experience = [
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
          "Piloted the developed test with the literacy center students",
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
      <div key={`experience-${experience.section}-label`}>
        <Label color="red" ribbon>
          {experience.section}
        </Label>
        {el}
      </div>
    );
  }
  return el;
};
