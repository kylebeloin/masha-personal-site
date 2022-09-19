import { teaching, sortTeaching } from "../data/teaching";
import { Page } from "./Page";
import { teachingElement } from "../elements/teachingElements";
import { groupBy } from "../utility";
import { Divider, Header, Label } from "semantic-ui-react";

export const Teaching = () => {
  let sortedTeaching = teaching.sort(sortTeaching);
  const groupedTeaching = groupBy(sortedTeaching, "level").map((grouped, i) => {
    return {
      group: grouped.group,
      items: groupBy(grouped.items, "institution").map((grouped, i) => {
        return {
          group: grouped.group,
          items: groupBy(grouped.items, "role"),
        };
      }),
    };
  });

  const title = "Teaching Experience";
  const content = (
    <div style={{ position: "relative" }}>
      {groupedTeaching.map(({ group, items }, i) => {
        return (
          <section id={group} key={`${group}-${i}-div`}>
            <Divider horizontal section>
              <Header as="h3">{`${group}`}</Header>
            </Divider>

            {items.map((firstInner, j) => {
              return (
                <div
                  key={`${firstInner.group}-${j}-div`}
                  //   id={`${group}-${inner.group.replace(" ", "-")}`}
                >
                  {firstInner.items.map((secondInner, k) => {
                    return (
                      <div
                        key={`${secondInner.group}-${k}-div`}
                        //   id={`${group}-${inner.group.replace(" ", "-")}`}
                      >
                        <>
                          <Label color="red" ribbon horizontal>
                            {`${secondInner.group}`}
                          </Label>
                          {`${firstInner.group}`} &mdash;{" "}
                          {`${secondInner.items[0].location}`}
                        </>
                        {secondInner.items.map((course, l) => {
                          return teachingElement(course, l);
                        })}
                      </div>
                    );
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

export default Teaching;
