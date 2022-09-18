import { Container, Grid, Sidebar, Menu } from "semantic-ui-react";
import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { Navbar, items } from "../components/Navbar";
import Aside from "../components/Aside";

export default function Layout() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  const handleClick = (e) => {
    e.preventDefault();

    setVisible(!visible);
  };

  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
      <nav>
        <Navbar {...{ visible, handleClick }} />
      </nav>
      <Sidebar
        className={"sidenav__container"}
        as={Menu}
        items={items(location.pathname)}
        visible={visible}
        vertical
        animation="overlay"
        direction="right"
        onClick={handleClick}
        onHide={() => setVisible(false)}
      />
      <Sidebar.Pushable>
        <Sidebar.Pusher>
          <Grid reversed="computer tablet" stackable className={"main"}>
            <Grid.Column
              computer={10}
              tablet={16}
              className="main__right--background"
            >
              <Container className="main__right__text">
                <Outlet />
              </Container>
            </Grid.Column>
            <Grid.Column computer={5} tablet={16} className="main__left">
              <Container className="main__left">
                <Aside />
              </Container>
            </Grid.Column>
          </Grid>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
      {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
    </div>
  );
}
