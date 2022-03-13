import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import { Icon, Menu } from "semantic-ui-react";
import withRouter from "./withRouter";
import { routes } from "../routes";

export const items = (pathname) => {
  return [
    ...routes.map((e, i) => ({
      key: e.name,
      name: e.name,
      as: NavLink,
      to: `/${e.path}`,
      active: pathname === `/${e.path}`,
      className: "menu__item--background",
    })),
  ];
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
      items={[...items(location.pathname), sideNav]}
    />
  );
};

export default withRouter(Navbar);
