import { Card, Grid, Image, Header, Segment } from "semantic-ui-react";

const projects = [
  {
    link: true,
    header: "Project Report - April",
    description:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
    meta: "ROI: 30%",
    className: "projects__card",
  },
  {
    link: true,
    header: "Project Report - May",
    description:
      "Bring to the table win-win survival strategies to ensure proactive domination.",
    meta: "ROI: 34%",
    className: "projects__card",
  },
  {
    link: true,
    header: "Project Report - June",
    description:
      "Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.",
    meta: "ROI: 27%",
    className: "projects__card",
    image: "/images/placeholder.png",
  },
];

export const projectCards = () => {
  return (
    <Card.Group>
      {projects.map((project, i) => (
        <Card key={`project-card-${i}`} link className="projects__card">
          <Grid>
            <Grid.Row centered as={"div"} className="projects__card__container">
              {project.image ? (
                <>
                  <Grid.Column only="computer tablet" width={6}>
                    <Image
                      src={process.env.PUBLIC_URL + "/images/placeholder.png"}
                      wrapped
                      size="medium"
                    />
                  </Grid.Column>{" "}
                  <Grid.Column computer={10} tablet={10} mobile={14}>
                    <Segment compact basic key={`card-container-${i}`}>
                      <Card.Meta>{project.meta}</Card.Meta>
                      <Card.Content>{project.description}</Card.Content>
                    </Segment>
                  </Grid.Column>
                </>
              ) : (
                <>
                  <Grid.Column width={14}>
                    <Segment compact basic key={`card-container-${i}`}>
                      <Card.Meta>{project.meta}</Card.Meta>
                      <Card.Content>{project.description}</Card.Content>
                    </Segment>
                  </Grid.Column>
                </>
              )}
            </Grid.Row>
          </Grid>
          <Card.Content extra>
            <Header as={"h5"}>{project.header}</Header>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};

export default projectCards;
