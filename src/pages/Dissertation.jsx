import Page from "./Page";
import { Header } from "semantic-ui-react";
import grants from "../data/grants";
import React from "react";
import { grantElement } from "../elements/grantElements";

export const Dissertation = () => {
  const title = "Dissertation Project";
  const content = (
    <>
      <Header>
        {" "}
        The Effect of Web-Based Pragma-Prosodic Instruction and Aptitude on
        Learner Pragmatic Development
      </Header>

      <p>
        <span className="header--bold">Funded by: </span>

        {grants.map((grant, i) => {
          return (
            <React.Fragment key={i}>
              {grantElement(grant)}
              {i + 1 === grants.length ? "" : ", "}
            </React.Fragment>
          );
        })}
      </p>

      <p>
        The study investigates the extent to which English learners' interaction
        skills can improve as a result of contextualized prosody instruction on
        a web-based platform. In step with advancing globalization, learners are
        increasingly more likely to participate in diverse English-mediated
        interactions (Crystal, 2003). Effective participation in such
        interactions requires the ability to use language appropriately in
        social contexts, known as pragmatic competence (Taguchi, 2009). Among
        the components of pragmatic competence, prosody (e.g., intonation and
        sentence stress) is fundamental for successful interaction. Learners
        need to be aware of not just what they say and to whom, but also how
        they say it. Despite the importance of prosody in interaction and the
        difficulties English learners face to use it appropriately (Herrero &
        Devís, 2020), pragmatic functions of prosody have been largely ignored
        in textbooks and classroom instruction.{" "}
      </p>
      <p>
        {" "}
        In this mixed-methods quasi-experimental study, 60 English learners from
        China are randomly assigned to the instruction group or the control
        group. Learners' use of prosody in requests before and after instruction
        is recorded through video-based role plays, evaluated for
        appropriateness by 20 trained raters, and analyzed acoustically.
        Quantitative data is triangulated with learners' survey responses about
        perceived instructional effectiveness. To provide a complete picture of
        instruction effectiveness, the study accounts for variation in learners'
        aptitude for acquiring prosodic properties of English. Results of the
        study will provide important guidance for designing effective and
        practical digitally mediated contextualized prosody instruction and help
        to better understand the role of learners' aptitude in its
        effectiveness.{" "}
      </p>
      <p>Expected completion: Spring 2023</p>
    </>
  );
  return <Page {...{ title, content }} />;
};

export default Dissertation;
