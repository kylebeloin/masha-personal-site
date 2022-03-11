import { Grid, Header, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import React from "react";
import Social from "./Social";

export const Aside = () => {
  return (
    <Grid className={"sidebar__container"}>
      <Grid.Row className={"sidebar__profile"}>
        <Image
          size="small"
          src={process.env.PUBLIC_URL + "/images/profile.jpeg"}
        />
      </Grid.Row>
      <Grid.Row>
        <Header as="h3" className="header--bold">
          Maria (Masha) Kostromitina
          <Header.Subheader>
            <a className={"ui"} href={"mailto:masha.kostromitina@gmail.com"}>
              masha.kostromitina@gmail.com
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
          Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia
          eget consectetur sed, convallis at tellus. Praesent sapien massa,
          convallis a pellentesque nec, egestas non nisi.
        </p>
      </Grid.Row>
      <Grid.Row>
        <Button
          style={{ marginBottom: "1rem" }}
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
