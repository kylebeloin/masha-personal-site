import { research } from "../data/research";
import { Page } from "./Page";
import { professionalElement } from "../elements/professionalElements";

export const Research = () => {
  const title = "Research Experience";
  const content = (
    <section id="research-experience" style={{ position: "relative" }}>
      {research.map((res, i) => {
        return professionalElement(res, i);
      })}
    </section>
  );
  return <Page {...{ title, content }} />;
};

export default Research;
