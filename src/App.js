import { Route, Switch } from "react-router";
import { ToastContainer } from "react-toastify";

import Layout from "./components/layouts/Layout";
import About from "./components/pages/About";
import Experience from "./components/pages/Experience";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Layout>
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
      </Switch>
    </Layout>
  );
}

export default App;
