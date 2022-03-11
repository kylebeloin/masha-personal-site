import Page from "./Page";
import { awards, awardElement } from "../data/awards";
import { service, serviceElement } from "../data/service";
import { education, educationElement } from "../data/education";
import { presentations, presentationElement } from "../data/presentations";
import { publications, publicationElement } from "../data/publications";
import { experience, experienceElement } from "../data/experience";
import { Divider, Header, Accordion } from "semantic-ui-react";

export const Cv = () => {
  const title = "Curriculum Vitae";
  const research = experience
    .filter((experience, i) => experience.category === "Research")
    .at(0);

  const teaching = experience
    .filter((experience, i) => experience.category === "Teaching")
    .at(0);

  const sections = [
    {
      title: "Education",
      elements: education.map((e, i) => educationElement(e, i)),
    },
    {
      title: "Research",
      elements: research.data.map((e, i) => experienceElement(e, i)),
    },
    {
      title: "Teaching",
      elements: teaching.data.map((e, i) => experienceElement(e, i)),
    },
    {
      title: "Publications",
      elements: publications.map((e, i) => publicationElement(e, i)),
    },
    {
      title: "Presentations",
      elements: presentations.map((e, i) => presentationElement(e, i)),
    },
    { title: "Service", elements: service.map((e, i) => serviceElement(e, i)) },
    { title: "Awards", elements: awards.map((e, i) => awardElement(e, i)) },
  ];

  const content = (
    <div style={{ position: "relative" }}>
      {sections.map((section, i) => {
        let panels = false;

        if (section.elements.length > 3) {
          const last = section.elements.slice(3);
          panels = [
            {
              key: `${section.title}-${i}-panes`,
              title: `See More ( ${last.length} )`,
              content: last,
            },
          ];
        }
        return (
          <div key={`${section.title}-${i}-div`}>
            <Divider horizontal section>
              <Header as="h3" id={section.title}>
                {section.title}
              </Header>
            </Divider>
            {panels ? (
              <>
                {section.elements.slice(0, 3)}{" "}
                <Accordion
                  key={`${section.title}-${i}-accordian`}
                  panels={panels}
                />
              </>
            ) : (
              section.elements
            )}
          </div>
        );
      })}
    </div>
  );
  return <Page {...{ title, content }} />;
};

export default Cv;
