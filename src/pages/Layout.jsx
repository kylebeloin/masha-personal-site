import { Container, Grid, Sidebar, Menu } from "semantic-ui-react";
import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { Navbar, items } from "../components/Navbar";
import Aside from "../components/Aside";

export default function Layout() {
  // whenever the location changes, the sidebar will be closed
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  const handleClick = (e) => {
    setVisible(!visible);
  };

  const scrollToTop = useCallback(() => {
    const main = document.querySelector("#main__content");
    const pushable = document.querySelector(".pushable");
    main.scrollTop = 0;
    pushable.scrollTop = 0;
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setVisible(false);
    scrollToTop();
  }, [location, scrollToTop]);

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
        items={items(location.pathname, "sidebar")}
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
              id="main__content"
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
