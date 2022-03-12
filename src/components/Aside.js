import { Grid, Header, Image } from "semantic-ui-react";
import React from "react";
import Social from "./Social";

export const Aside = () => {
  return (
    <Grid className={"sidebar__container"}>
      <Grid.Row className={"sidebar__profile"}>
        <Grid.Column
          computer={16}
          tablet={5}
          mobile={5}
          className={"sidebar__column"}
          style={{
            paddingRight: "0",
            marginRight: "1rem",
          }}
        >
          <Image
            style={{
              minWidth: "175px",

              width: "min(200px, 100%)",
            }}
            size="medium"
            src={process.env.PUBLIC_URL + "/images/profile.jpeg"}
          />
        </Grid.Column>
        <Grid.Column
          computer={16}
          tablet={10}
          mobile={10}
          className={"sidebar__column"}
        >
          <Header as="h3" className="header--bold sidebar__info">
            Maria (Masha) Kostromitina
            <Header.Subheader>
              <a className={"ui"} href={"mailto:masha@nau.edu"}>
                masha@nau.edu
              </a>
            </Header.Subheader>
          </Header>
          <hr className="sidebar__hr" />
          <Header
            textAlign="left"
            as="h4"
            className="sidebar__about"
            content={"About"}
          />
          <p>
            PhD candidate in Applied Linguistics{" "}
            <a className="ui" href={"https://twitter.com/NAU"}>
              @NAU
            </a>{" "}
            researching L2 speech, pragmatics, and corpus linguistics | Language
            learning addict | Cats and climbing💫 | (she/her)
          </p>

          <Social />
          <hr className="sidebar__hr" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Aside;
