import Page from "./Page";
import { publications, sortPublications } from "../data/publications";
import { publicationElement } from "../elements/publicationElements";
import { Divider, Header, Label } from "semantic-ui-react";
import { groupBy } from "../utility";
// TODO: Add filter and sort / search

export const Publications = () => {
  const title = "Publications";

  publications.sort(sortPublications);

  const groupedPublications = groupBy(publications, "type").map(
    (grouped, i) => {
      return { group: grouped.group, items: groupBy(grouped.items, "year") };
    }
  );

  const content = (
    <div style={{ position: "relative" }}>
      {groupedPublications.map(({ group, items }, i) => {
        return (
          <section id={group} key={`${group}-${i}-div`}>
            <Divider horizontal section>
              <Header as="h3">{`${group}s`}</Header>
            </Divider>
            {items.map((inner, j) => {
              return (
                <div key={`${inner.group}-${j}-div`}>
                  <Label color="red" ribbon>
                    {`${inner.group}`}
                  </Label>
                  {inner.items.map((publication, k) => {
                    return publicationElement(publication, k);
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

export default Publications;
