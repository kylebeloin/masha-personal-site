import Home from "./pages/Home";
// import About from "./pages/About";
// import Cv from "./pages/Cv";
import Publications from "./pages/Publications";
import { Presentations } from "./pages/Presentations";
import Dissertation from "./pages/Dissertation";
import Projects from "./pages/Projects";
import Teaching from "./pages/Teaching";
import { Professional } from "./pages/Professional";

export const routes = [
  { name: "Masha Kostromitina", path: "", element: Home },
  // { name: "About", path: "about", element: About },
  { name: "Projects", path: "projects", element: Projects },
  { name: "Publications", path: "publications", element: Publications },
  { name: "Presentations", path: "presentations", element: Presentations },
  // { name: "Presentations", path: "presentations", element: Presentations },
  // { name: "CV", path: "cv", element: Cv },
  { name: "Dissertation", path: "dissertation", element: Dissertation },
  [
    { name: "Teaching", path: "teaching", element: Teaching },
    { name: "Professional", path: "professional", element: Professional },
  ],
];

export default routes;
