import { professional, sortProfessional } from "../data/professional";
import { Page } from "./Page";
import { professionalElement } from "../elements/professionalElements";

export const Professional = () => {
  const title = "Professional Experience";
  const content = (
    <section id="professional-experience" style={{ position: "relative" }}>
      {professional.sort(sortProfessional).map((professional, i) => {
        return professionalElement(professional, i);
      })}
    </section>
  );
  return <Page {...{ title, content }} />;
};

export default Professional;
