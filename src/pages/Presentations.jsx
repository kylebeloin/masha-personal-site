import { presentations, sortPresentations } from "../data/presentations";
import { Page } from "./Page";
import { presentationElement } from "../elements/presentationElements";
import { groupBy } from "../utility";
import { Divider, Header } from "semantic-ui-react";

export const Presentations = () => {
  let sortedPresentations = presentations.sort(sortPresentations);
  const groupedPresentations = groupBy(sortedPresentations, "type");

  const title = "Presentations";
  const content = (
    <div style={{ position: "relative" }}>
      {groupedPresentations.map((group, i) => {
        return (
          <section id={group.group} key={`${group.group}-${i}-div`}>
            <Divider horizontal section>
              <Header as="h3">{`${group.group}`}</Header>
            </Divider>

            {group.items.map((presentation, j) => {
              return presentationElement(presentation, j);
            })}
          </section>
        );
      })}
    </div>
  );
  return <Page {...{ title, content }} />;
};

export default Presentations;
