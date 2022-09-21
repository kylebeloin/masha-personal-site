import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import routes from "./routes";
import withRouter from "./components/withRouter";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map((e, i) => {
          if (Array.isArray(e)) {
            return e.map((r, i) => (
              <Route
                key={`route-${i}`}
                index={i === 0}
                path={r.path}
                element={<r.element />}
              />
            ));
          } else {
            return (
              <Route
                key={i}
                index={i === 0}
                path={e.path}
                element={<e.element />}
              />
            );
          }
        })}
        {/* Fallback */}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </Routes>
  );
}

export default withRouter(App);
