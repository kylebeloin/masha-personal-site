import { Header, Accordion, Segment, Grid, Label } from "semantic-ui-react";

export const publicationElement = (publication, i) => {
  let panes;
  let el;

  switch (true) {
    case publication?.type === "article":
      panes = publication.data.abstract
        ? [
            {
              key: `abstract-${i}`,
              title: "View Abstract",
              content: {
                content: (
                  <Segment basic style={{ padding: "0 1em" }}>
                    <p>{publication.data.abstract}</p>
                  </Segment>
                ),
              },
            },
          ]
        : [];
      el = (
        <Header key={`pub-container-${i}`} size="small" className="publication">
          <Header.Subheader>
            <p style={{ marginBottom: "0" }}>
              {publication.authors.reduce((prev, curr, i) => {
                if (i === publication.authors.length - 1) {
                  return `${prev} & ${curr}`;
                }

                return i === 0 ? curr : prev + ", " + curr;
              })}{" "}
              <span className="year--emphasis">({publication.year})</span>
            </p>
          </Header.Subheader>
          <Header
            key={`pub-title-${i}`}
            className={`publications__link ${
              (publication.data.link === "" || !publication.data.link) &&
              "disabled__link"
            }`}
            size="tiny"
            as={"a"}
            href={publication.data.link ? publication.data.link : ""}
            target={"_blank"}
            onClick={
              publication.data.link ? null : (event) => event.preventDefault()
            }
          >
            {publication.title.primary}
            {publication.title.secondary !== "" &&
              `: ${publication.title.secondary}`}
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
              {publication.data.journal}
            </p>
            {panes.length > 0 && (
              <Accordion key={`pub-accordian-${i}`} panels={panes} />
            )}
          </Header.Subheader>
        </Header>
      );

      if (publication?.section !== undefined) {
        el = (
          <div key={`pub-${publication.section}-label`}>
            <Label color="red" ribbon>
              {publication.section}
            </Label>
            {el}
          </div>
        );
      }
      return el;

    case publication?.type === "book" || publication?.type === "chapter":
      panes = [
        {
          key: `details-${i}`,
          title: "More Details",
          content: {
            content: (
              <Segment basic style={{ padding: "0 1em 0 2em" }}>
                <Grid>
                  {publication.data.book ? (
                    <Grid.Row style={{ flexDirection: "column" }}>
                      <Grid.Column
                        className={"header--bold"}
                        style={{ width: "fit-content" }}
                      >
                        <p style={{ fontWeight: "800" }}>Book:</p>
                      </Grid.Column>
                      <Grid.Column width={14}>
                        <p>{publication.data.book}</p>
                      </Grid.Column>
                    </Grid.Row>
                  ) : null}
                  <Grid.Row style={{ flexDirection: "column" }}>
                    <Grid.Column style={{ width: "fit-content" }}>
                      <p style={{ fontWeight: "800" }}>Publisher:</p>
                    </Grid.Column>
                    <Grid.Column width={14}>
                      <p>{publication.data.publisher}</p>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row style={{ flexDirection: "column" }}>
                    <Grid.Column style={{ width: "fit-content" }}>
                      <p style={{ fontWeight: "800" }}>Description:</p>
                    </Grid.Column>
                    <Grid.Column width={14}>
                      <p>{publication.data?.description || ""}</p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            ),
          },
        },
      ];
      el = (
        <Header key={`pub-container-${i}`} size="small" className="publication">
          <Header.Subheader>
            <p style={{ marginBottom: "0" }}>
              {publication.authors.reduce((prev, curr, i) => {
                return i === 0 ? curr : prev + ", " + curr;
              })}{" "}
              ({publication.year})
            </p>
          </Header.Subheader>
          <Header
            key={`pub-title-${i}`}
            size="tiny"
            className={`publications__link ${
              !publication.data.link ? "disabled__link" : ""
            }`}
            as={"a"}
            href={publication.data.link ? publication.data.link : ""}
            target={"_blank"}
            onClick={
              publication.data.link ? null : (event) => event.preventDefault()
            }
          >
            {publication.title.primary}
            {publication.title.secondary !== "" &&
              `: ${publication.title.secondary}`}
          </Header>
          <Header.Subheader key={`pub-authors-${i}`}>
            <Accordion key={`pub-accordian-${i}`} panels={panes} />
          </Header.Subheader>
        </Header>
      );
      return el;
    default:
      return null;
  }
};

export default publicationElement;
