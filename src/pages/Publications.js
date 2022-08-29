import Page from "./Page";
import { publicationElement, publications } from "../data/publications";
import { Divider, Header } from "semantic-ui-react";

export const Publications = () => {
  const title = "Publications";

  const sections = [
    {
      title: "Articles",
      elements: publications
        .filter((e) => e.type === "journal")
        .map((publication, i) => publicationElement(publication, i)),
    },
    {
      title: "Books",
      elements: publications
        .filter((e) => e.type === "book")
        .map((publication, i) => publicationElement(publication, i)),
    },
    {
      title: "Chapters",
      elements: publications
        .filter((e) => e.type === "chapter")
        .map((publication, i) => publicationElement(publication, i)),
    },
  ];

  const content = (
    <div style={{ position: "relative" }}>
      {sections.map((section, i) => {
        return (
          <div key={`${section.title}-${i}-div`}>
            <Divider horizontal section>
              <Header as="h3" id={section.title}>
                {section.title}
              </Header>
            </Divider>
            {section.elements}
          </div>
        );
      })}
    </div>
  );
  return <Page {...{ title, content }} />;
};

export default Publications;
