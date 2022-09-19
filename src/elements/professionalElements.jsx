import { List, Header, Accordion, Segment } from "semantic-ui-react";

export const professionalElement = (professional, i) => {
  let panes = [
    {
      key: `professional-responsibilities-${i}`,
      title: "Responsibilities",
      content: {
        content: (
          <Segment basic style={{ padding: "0 1em" }}>
            <List as={"ul"}>
              {professional.responsibilities.map((responsibility, x) => (
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
    <Header key={`professional-container-${i}`} size="small">
      <Header.Subheader
        as={professional?.link ? "a" : "span"}
        href={professional?.link ? professional.link : ""}
        target={"_blank"}
        onClick={professional?.link ? null : (event) => event.preventDefault()}
      >
        {professional.employer}{" "}
        <span className="year--emphasis">
          (
          {professional.active.length > 1 &&
            `${Math.min(...professional.active)}-`}
          {`${Math.max(...professional.active)}`})
        </span>
      </Header.Subheader>
      {professional.title && (
        <Header
          key={`professional-title-${i}`}
          style={{ marginTop: "0", marginBottom: "0" }}
          size="tiny"
        >
          {professional.title?.primary && professional.title.primary}
          {professional.title.secondary &&
            ` - ${professional.title.secondary}`}{" "}
        </Header>
      )}
      <Header.Subheader>
        <p
          style={{
            marginBottom: "0",
            marginTop: "0",
            marginLeft: "auto",
            fontWeight: "400",
          }}
        >
          {professional.location}
        </p>
        <Accordion panels={panes} />
      </Header.Subheader>
    </Header>
  );

  return el;
};
