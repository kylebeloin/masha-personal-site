import Home from "./pages/Home";
import About from "./pages/About";
import Cv from "./pages/Cv";
import Publications from "./pages/Publications";
// import Dissertation from "./pages/Dissertation";
// import Projects from "./pages/Projects";

export const routes = [
  { name: "Masha Kostromitina", path: "", element: Home },
  { name: "About", path: "about", element: About },
  // { name: "Projects", path: "projects", element: Projects },
  { name: "Publications", path: "publications", element: Publications },
  { name: "CV", path: "cv", element: Cv },
  // { name: "Dissertation", path: "dissertation", element: Dissertation },
];

export default routes;
