import Page from "./Page";
import Social from "../components/Social";

export const Contact = () => {
  const title = "Contact";
  const content = (
    <>
      <Social />
    </>
  );
  return <Page {...{ title, content }} />;
};

export default Contact;
