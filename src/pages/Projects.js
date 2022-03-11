import Page from "./Page";

import projectCards from "../data/projects";

export const Projects = () => {
  const title = "Projects";
  const content = <>{projectCards()}</>;
  return <Page {...{ title, content }} />;
};

export default Projects;
