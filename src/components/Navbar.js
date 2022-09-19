import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import { Icon, Menu, Dropdown } from "semantic-ui-react";
import withRouter from "./withRouter";
import { routes } from "../routes";

const options = (routes) => {
  let options = routes.map((e) => (
    <Menu.Item
      className="menu__item--background item dropdown__item"
      key={e.path}
      as={NavLink}
      to={e.path}
      style={{ display: "grid" }}
    >
      {e.name}
    </Menu.Item>
  ));

  return (
    <Dropdown
      text="Experience"
      className="link"
      floating
      fluid
      style={{
        height: "100%",
        padding: "0.92857143em 1.14285714em",
        display: "flex",
        alignItems: "center",
        marginTop: "0 !important",
      }}
    >
      <Dropdown.Menu as={Menu} style={{ marginTop: "0 !important" }}>
        {options}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export const items = (pathname, key) => {
  const i = routes.map((route, i) => {
    let el;
    if (Array.isArray(route)) {
      el = {
        as: "div",
        key: `dropdown-${i}`,
        content: options(route),
        active: route.map((r) => `${r.path}`).includes(pathname),
        className: "menu__item--background",
        style: {
          display: "grid",
          padding: "0",
        },
      };
    } else {
      el = {
        key: `${route.name}-${key}-${i}`,
        name: route.name,
        as: NavLink,
        to: `/${route.path}`,
        active: pathname === `/${route.path}`,
        className: "menu__item--background",
      };
    }
    return el;
  });
  return i;
};

export const Navbar = (props) => {
  const visible = props.visible;
  const setVisible = props.handleClick;
  const location = useLocation();

  const sideNav = {
    key: "sidenav",
    onClick: setVisible,
    as: "div",
    active: visible,
    icon: true,
    content: visible ? (
      <Icon fitted name="cancel" />
    ) : (
      <Icon fitted name="content" />
    ),
    className: "menu__item--background menu__item--sidenav",
  };

  return (
    <Menu
      borderless
      size="huge"
      id="menu__container"
      className="menu__container--background"
      fixed="top"
      items={[...items(location.pathname, "nav", setVisible), sideNav]}
    />
  );
};

export default withRouter(Navbar);
