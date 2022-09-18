import presentations from "../data/presentations";
import { Page } from "./Page";
import { presentationElement } from "../elements/presentationElements";

export const Presentations = () => {
  const title = "Presentations";
  const content = (
    <div style={{ position: "relative" }}>
      {presentations.map((presentation, i) => {
        return presentationElement(presentation, i);
      })}
    </div>
  );
  return <Page {...{ title, content }} />;
};

export default Presentations;
