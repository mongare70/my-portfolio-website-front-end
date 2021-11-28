import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
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
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
