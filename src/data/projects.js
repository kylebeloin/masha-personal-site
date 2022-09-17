import { Card, Grid, Header, Segment } from "semantic-ui-react";

const projects = [
  {
    // If true, card animates on hover. Set an "href: [link]" property on this card to link.

    // Label at bottom of card (Header)
    title: "Equality, Diversity, and Inclusion: Different Varieties of Accents in Aptis English Listening Tests",
    // Primary text on card
    "description": (<>
    The purpose of the study is to examine the impact of English accent
varieties on test-takers’ performance on Aptis listening tasks and the effect of
shared-L1 background between the listener and speaker. In particular, the
study investigates potential shared-L1 effect as well as the effect of
unfamiliar, but widely encountered L2 English accents on listeners’ test
performance. In doing so, the project provides localization-related validity
evidence of the listening tasks of the Aptis General test (Aptis hereinafter). 
Findings of the study will inform the development of the listening tasks on Aptis and provide a better
understanding of the equality, diversity, and inclusion (EDI) issues related to
the design and administration of the test.
    </>),
    // Appears in grey at top of card
    role: "Research Assistant",
    principal: "Okim Kang",
    collaborators: "",
    funding: "British Council Assessment Grant 2022",
    className: "projects__card",
  },
  {
    // If true, card animates on hover. Set an "href: [link]" property on this card to link.

    // Label at bottom of card (Header)
    title: "Fairness of Using Different English Accents in Listening Tasks of the Duolingo English Test",
    // Primary text on card
    description: (<> The project explores the fairness of using different English accents in DET listening tasks by examining the impact of accent varieties on listeners’ performances and the effect of the listener sharing the same English accent as the speaker. It further investigates how different task characteristics affect listeners’ performances with varieties of English accents and listeners’ attitudes towards the inclusion of accented English in the DET from the perspectives of test fairness. The findings of the project provide important guidance to promote the DET as a test of international English and to better understand fairness, equality, and practicality of designing and administering high-stakes English tests. 
                  </>),
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
    "description": "",
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
