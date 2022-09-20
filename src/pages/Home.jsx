import Page from "./Page";
import { educationElements } from "../data/education";
import { Divider, Header } from "semantic-ui-react";

export const Home = () => {
  const title = "Welcome!";
  const content = (
    <>
      <section id={"about"}>
        <Divider horizontal section>
          <Header as="h3">{`About Me`}</Header>
        </Divider>
        <p>Thank you for visiting my website!</p>
        <p>
          I am a Ph.D. candidate in Applied Linguistics at Northern Arizona
          University. My research interests lie at the intersection of second
          language prosody and pragmatics. Specifically, I investigate the
          effectiveness of pragma-prosodic training in improving learners' use
          of prosody in speech acts and the role of cognitive individual
          differences in prosody acquisition. I have also been involved in
          research projects in the domains of speech perception, language
          assessment, and corpus linguistics. For more information about the
          past and current research projects I have been a part of, please visit
          the "Projects" page.
        </p>
        <p>
          Apart from my work in Applied Linguistics, I enjoy climbing and
          hiking. These hobbies are a given when you live in Flagstaff, AZ!
          Other interests of mine include learning languages (so far, I have
          tackled German, French, and Mandarin), cats, and traveling.
        </p>

        <p>
          {" "}
          If you would like to see my recent work, please check out my{" "}
          <a className="ui" href={"/publications"}>
            Publications
          </a>{" "}
          page. You can also find my past and current research projects on the{" "}
          <a className="ui" href={"/projects"}>
            Projects
          </a>{" "}
          page. You can download my{" "}
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
          To learn more about my research or collaborate on a project, the best
          way to reach me is through my email,{"  "}
          <a className={"ui"} href={"mailto:masha@nau.edu"}>
            masha@nau.edu
          </a>
          . Looking forward to hearing from you soon!
        </p>
      </section>
      <section id={"education"}>
        <Divider horizontal section>
          <Header as="h3">{`Education`}</Header>
        </Divider>
        {educationElements()}
      </section>
    </>
  );

  return <Page {...{ title, content }} />;
};

export default Home;
