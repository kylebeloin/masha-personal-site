import { presentations, sortPresentations } from "../data/presentations";
import { Page } from "./Page";
import { presentationElement } from "../elements/presentationElements";
import { groupBy } from "../utility";
import { Divider, Header, Label } from "semantic-ui-react";

export const Presentations = () => {
  let sortedPresentations = presentations.sort(sortPresentations);
  const groupedPresentations = groupBy(sortedPresentations, "type").map(
    (grouped, i) => {
      return {
        group: grouped.group,
        items: groupBy(grouped.items, "year"),
      };
    }
  );

  const title = "Presentations";
  const content = (
    <div style={{ position: "relative" }}>
      {groupedPresentations.map((group, i) => {
        return (
          <section id={group.group} key={`${group.group}-${i}-div`}>
            <Divider horizontal section>
              <Header as="h3">{`${group.group}`}</Header>
            </Divider>

            {group.items.map((inner, j) => {
              return (
                <div key={`${inner.group}-${j}-div`}>
                  <Label color="red" ribbon>
                    {`${inner.group}`}
                  </Label>
                  {inner.items.map((presentation, k) => {
                    return presentationElement(presentation, k);
                  })}
                </div>
              );
            })}
          </section>
        );
      })}
    </div>
  );
  return <Page {...{ title, content }} />;
};

export default Presentations;
