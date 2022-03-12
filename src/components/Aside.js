import { Grid, Header, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import React from "react";
import Social from "./Social";

export const Aside = () => {
  return (
    <Grid className={"sidebar__container"}>
      <Grid.Row className={"sidebar__profile"}>
        <Image
          style={{ maxWidth: "215px" }}
          size="medium"
          src={process.env.PUBLIC_URL + "/images/profile.jpeg"}
        />
      </Grid.Row>
      <Grid.Row>
        <Header as="h3" className="header--bold">
          Maria (Masha) Kostromitina
          <Header.Subheader>
            <a className={"ui"} href={"mailto:masha@nau.edu"}>
              masha@nau.edu
            </a>
          </Header.Subheader>
        </Header>
      </Grid.Row>
      <hr className="sidebar__hr" />
      <Grid.Row textAlign={"left"} className="sidebar__about">
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
      </Grid.Row>
      <Grid.Row>
        <Button
          className={"button--text"}
          basic
          as={Link}
          to="/about"
          content={<h6 style={{ margin: "0" }}>{"Learn More"}</h6>}
        />
      </Grid.Row>

      <hr className="sidebar__hr" />
      <Grid.Row>
        <Social />
      </Grid.Row>
    </Grid>
  );
};

export default Aside;
