import { Card, Grid, Header, Segment } from "semantic-ui-react";

const projects = [
  {
    // If true, card animates on hover. Set an "href: [link]" property on this card to link.

    // Label at bottom of card (Header)
    title: "Coming Soon...",
    // Primary text on card
    description: "",
    // Appears in grey at top of card
    role: "",
    principal: "",
    collaborators: "",
    className: "projects__card",
  },
  {
    // If true, card animates on hover. Set an "href: [link]" property on this card to link.

    // Label at bottom of card (Header)
    title: "Coming Soon...",
    // Primary text on card
    description: "",
    // Appears in grey at top of card
    role: "",
    principal: "",
    collaborators: "",
    className: "projects__card",
  },
  {
    // If true, card animates on hover. Set an "href: [link]" property on this card to link.

    // Label at bottom of card (Header)
    title: "Coming Soon...",
    // Primary text on card
    description: "",
    // Appears in grey at top of card
    role: "",
    principal: "",
    collaborators: "",
    className: "projects__card",
  },
  {
    // If true, card animates on hover. Set an "href: [link]" property on this card to link.

    // Label at bottom of card (Header)
    title: "Coming Soon...",
    // Primary text on card
    description: "",
    // Appears in grey at top of card
    role: "",
    principal: "",
    collaborators: "",
    className: "projects__card",
  },
];

export const projectCards = () => {
  return (
    <Card.Group>
      {projects.map((project, i) => (
        <Card key={`project-card-${i}`} className="projects__card">
          <Card.Content>
            <Card.Header as={Header}>{project.title}</Card.Header>
          </Card.Content>
          <Card.Content>
            <Grid>
              <Grid.Row
                centered
                as={"div"}
                className="projects__card__container"
              >
                <Grid.Column width={16}>
                  <Segment
                    style={{ padding: 0 }}
                    compact
                    basic
                    key={`card-container-${i}`}
                  >
                    <Header.Subheader
                      className="header--bold project--bold"
                      style={{
                        lineHeight: ".9",
                      }}
                    >
                      <p className="project--bold">
                        Principal Investigators: {project.principal}
                      </p>
                    </Header.Subheader>
                    <Header.Subheader
                      className="header--bold project--bold"
                      style={{
                        lineHeight: ".9",
                      }}
                    >
                      <p className="project--bold">
                        Collaborators: {project.collaborators}
                      </p>
                    </Header.Subheader>
                    <Header.Subheader
                      className="header--bold project--bold"
                      style={{
                        lineHeight: ".9",
                      }}
                    >
                      <p className="project--bold">Role: {project.role}</p>
                    </Header.Subheader>
                    <Header.Subheader className="projects__text">
                      <p style={{ fontSize: "16px", marginTop: "1em" }}>
                        {project.description}
                      </p>
                    </Header.Subheader>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};

export default projectCards;
