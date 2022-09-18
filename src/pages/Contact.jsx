import Page from "./Page";
import Social from "../components/Social";

export const Contact = () => {
  const title = "Contact";
  const content = (
    <>
      <p>
        If you would like to learn more about my research or collaborate on a
        project, the best way to reach me is through my email,{"  "}
        <a className={"ui"} href={"mailto:masha@nau.edu"}>
          masha@nau.edu
        </a>
        . Looking forward to hearing from you soon!
      </p>

      <Social />
    </>
  );
  return <Page {...{ title, content }} />;
};

export default Contact;
