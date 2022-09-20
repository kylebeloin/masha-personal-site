import Home from "./pages/Home";
import Publications from "./pages/Publications";
import Presentations from "./pages/Presentations";
import Dissertation from "./pages/Dissertation";
import Projects from "./pages/Projects";
import Teaching from "./pages/Teaching";
import Professional from "./pages/Professional";
import Service from "./pages/Service";
import Awards from "./pages/Awards";
import Research from "./pages/Research";

export const routes = [
  { name: "Masha Kostromitina", path: "", element: Home },
  { name: "Projects", path: "projects", element: Projects },
  { name: "Publications", path: "publications", element: Publications },
  { name: "Presentations", path: "presentations", element: Presentations },
  { name: "Dissertation", path: "dissertation", element: Dissertation },
  [
    { name: "Teaching", path: "teaching", element: Teaching },
    { name: "Professional", path: "professional", element: Professional },
    { name: "Research", path: "research", element: Research },
  ],
  { name: "Service", path: "service", element: Service },
  { name: "Grants and Awards", path: "grants-and-awards", element: Awards },
];

export default routes;
