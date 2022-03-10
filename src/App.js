import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import routes from "./routes";
import withRouter from "./components/withRouter";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map((e, i) => {
          return (
            <Route
              key={i}
              index={i === 0}
              path={e.path}
              element={<e.element />}
            />
          );
        })}
      </Route>
    </Routes>
  );
}

export default withRouter(App);
