import Page from "./Page";
import Social from "../components/Social";
import { Segment } from "semantic-ui-react";

export const Contact = () => {
  const title = "Contact";
  const content = (
    <>
      <p>
        Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed
        magna dictum porta. Donec rutrum congue leo eget malesuada.
      </p>

      <Social />
    </>
  );
  return <Page {...{ title, content }} />;
};

export default Contact;
