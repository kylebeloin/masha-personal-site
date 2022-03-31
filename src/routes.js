import Home from "./pages/Home";
import About from "./pages/About";
import Cv from "./pages/Cv";
import Contact from "./pages/Contact";
import Publications from "./pages/Publications";
import Projects from "./pages/Projects";

export const routes = [
  { name: "Masha Kostromitina", path: "", element: Home },
  { name: "About", path: "about", element: About },
  // { name: "Projects", path: "projects", element: Projects },
  { name: "Publications", path: "publications", element: Publications },
  { name: "Curriculum Vitæ", path: "cv", element: Cv },
  { name: "Contact", path: "contact", element: Contact },
];

export default routes;
