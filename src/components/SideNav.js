import React from "react";
import { Menu, Sidebar } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const CustomSidebar = (props) => {
  const { userId, authenticated, visible, setVisible, is_moderator } = props;
  return (
    <Sidebar
      as={Navbar}
      animation="overlay"
      inverted
      onHide={() => setVisible(false)}
      vertical
      visible={visible}
      width="thin"
      style={{ background: "var(--primary-bg-color-dark)" }}
    />
  );
};

export default CustomSidebar;
