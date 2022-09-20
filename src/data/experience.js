import { List, Header, Accordion, Segment, Label } from "semantic-ui-react";

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
