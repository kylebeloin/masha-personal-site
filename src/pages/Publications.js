import Page from "./Page";
import { publicationElement, publications } from "../data/publications";

export const Publications = () => {
  const title = "Publications";
  const content = publications.map((publication, i) =>
    publicationElement(publication, i)
  );
  return <Page {...{ title, content }} />;
};

export default Publications;
