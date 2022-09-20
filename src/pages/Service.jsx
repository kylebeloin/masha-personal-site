import { service, sortService } from "../data/service";
import { Page } from "./Page";
import {
  serviceElement,
  affiliationElements,
} from "../elements/serviceElements";
import { groupBy } from "../utility";
import { Divider, Header } from "semantic-ui-react";

export const Presentations = () => {
  let sortedService = service.sort(sortService);
  const groupedService = groupBy(sortedService, "type");

  const title = "Service";
  const content = (
    <div style={{ position: "relative" }}>
      {groupedService.map((group, i) => {
        return (
          <section id={group.group} key={`${group.group}-${i}-div`}>
            <Divider horizontal section>
              <Header as="h3">{`${group.group}`}</Header>
            </Divider>
            {group.group === "Professional Affiliations"
              ? affiliationElements(group)
              : group.items.map((service, j) => {
                  return serviceElement(service, j, group.group);
                })}
          </section>
        );
      })}
    </div>
  );
  return <Page {...{ title, content }} />;
};

export default Presentations;
