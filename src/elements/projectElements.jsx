import { Card, Grid, Header, Segment } from "semantic-ui-react";
import { projects } from "../data/projects";

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
                    <Header.Subheader className="projects__text">
                      <p style={{ fontSize: "16px", marginTop: "0" }}>
                        Role: {project.role}
                      </p>
                    </Header.Subheader>
                    {project?.principal?.length > 0 && (
                      <Header.Subheader className="projects__text">
                        <p style={{ fontSize: "16px", marginTop: "0" }}>
                          Principal Investigators: {project.principal}
                        </p>
                      </Header.Subheader>
                    )}
                    {project?.collaborators?.length > 0 && (
                      <Header.Subheader className="projects__text">
                        <p style={{ fontSize: "16px", marginTop: "0" }}>
                          Collaborators: {project.collaborators}
                        </p>
                      </Header.Subheader>
                    )}

                    <Header.Subheader className="projects__text">
                      <p style={{ fontSize: "16px", marginTop: "1em" }}>
                        {project.description}
                      </p>
                    </Header.Subheader>
                    {project?.funding && (
                      <p
                        style={{
                          fontSize: "16px",
                          marginTop: "1em",
                          fontWeight: "600",
                        }}
                      >
                        Funded By: {project.funding}
                      </p>
                    )}
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
