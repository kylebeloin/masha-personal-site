import Page from "./Page";

export const Home = () => {
  const title = "Welcome!";
  const content = (
    <p>
      Thank you for visiting my website! If you would like to see my recent
      work, please check out my{" "}
      <a className="ui" href={"/publications"}>
        Publications
      </a>{" "}
      page.{" "}
      {/* You can also find my past and current research projects on the{" "}
      <a className="ui" href={"/projects"}>
        Projects
      </a>{" "}
      page.  */}
      You can download my{" "}
      <a
        className="ui"
        href="https://kostromitina.s3.us-east-2.amazonaws.com/kostromitina_cv_14092022.pdf"
        title={"Download Curriculum Vitae"}
        aria-label="link"
        target={"_blank"}
        rel="noreferrer"
      >
        CV
      </a>{" "}
      to learn about my teaching experience as well as service and awards.
    </p>
  );

  return <Page {...{ title, content }} />;
};

export default Home;
