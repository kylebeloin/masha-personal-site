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
          I am an applied linguist and a language educator with over 10 years of
          research and professional experience in language teaching and
          learning. My interdisciplinary research lies at the intersection of
          second language prosody and pragmatics. Specifically, I research the
          effectiveness of web-based pragma-prosodic training in improving
          learners' interactional skills and the role of cognitive individual
          differences in prosody acquisition. My other projects have focsued on
          World Englishes in language assessment, corpus linguistic
          investigations of L1/L2 spoken and written discourse, and research
          methods in Applied Linguistics. My research has been supported by
          several leading organizations, including The British Council,
          Duolingo, The International Research Foundation, the National
          Federation of Modern Language Teachers Association, and the Language
          Learning journal.
        </p>
        <p>
          Apart from my work in Applied Linguistics, I enjoy climbing and
          hiking. Other interests of mine include learning languages (so far, I
          have tackled German, French, and Mandarin), yoga, and traveling.
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
            href="https://kostromitina.s3.us-east-2.amazonaws.com/kostromitina_cv_20092022.pdf"
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
