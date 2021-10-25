import React, { Suspense } from "react";
import { Route, Switch } from "react-router";
import { ToastContainer } from "react-toastify";

import Layout from "./components/layouts/Layout";

const About = React.lazy(() => import("./components/pages/About"));
const Experience = React.lazy(() => import("./components/pages/Experience"));
const Projects = React.lazy(() => import("./components/pages/Projects"));
const Contact = React.lazy(() => import("./components/pages/Contact"));
const PageNotFound = React.lazy(() =>
  import("./components/pages/PageNotFound")
);

function App() {
  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        <ToastContainer />
        <Switch>
          <Route path="/" exact>
            <About />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
