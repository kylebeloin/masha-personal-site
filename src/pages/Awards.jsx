import { awards, sortAwards } from "../data/awards";
import { Page } from "./Page";
import { awardElement } from "../elements/awardElements";
import { groupBy } from "../utility";
import { Divider, Header } from "semantic-ui-react";

export const Awards = () => {
  let sortedAwards = awards.sort(sortAwards);
  const groupedAwards = groupBy(sortedAwards, "type");

  const title = "Grants & Awards";
  const content = (
    <div style={{ position: "relative" }}>
      {groupedAwards.map((group, i) => {
        return (
          <section id={group.group} key={`${group.group}-${i}-div`}>
            <Divider horizontal section>
              <Header as="h3">{`${group.group}S`}</Header>
            </Divider>

            {group.items.map((awards, j) => {
              return awardElement(awards, j);
            })}
          </section>
        );
      })}
    </div>
  );
  return <Page {...{ title, content }} />;
};

export default Awards;
