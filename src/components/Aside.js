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
            className="sidebar__image mobile-centered"
            size="medium"
            title="Masha Kostromitina"
            width="199"
            height="240"
            src={process.env.PUBLIC_URL + "/images/profile.webp"}
            alt={
              "Masha smiling at the camera, sitting in an outdoor dining area."
            }
          />
        </Grid.Column>
        <Grid.Column
          computer={16}
          tablet={10}
          mobile={10}
          className={"sidebar__column"}
        >
          <Header
            as="h3"
            className="header--bold sidebar__info mobile-centered"
          >
            Maria (Masha) Kostromitina
            <Header.Subheader>
              <a className={"ui"} href={"mailto:masha@nau.edu"}>
                masha@nau.edu
              </a>
            </Header.Subheader>
          </Header>
          <hr className="sidebar__hr mobile-centered" />
          <p>
            PhD candidate in Applied Linguistics{" "}
            <a className="ui" href={"https://twitter.com/NAU"}>
              @NAU
            </a>{" "}
            researching L2 speech, pragmatics, and corpus linguistics | Language
            learning addict | Cats and climbing | (she/her)
          </p>

          <Social />
          <hr className="sidebar__hr mobile-centered" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Aside;
