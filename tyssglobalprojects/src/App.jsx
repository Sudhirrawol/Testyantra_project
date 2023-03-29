import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import "./global.css"
import TyssRoute from "./routes/TyssRoute";

const App = () => {
  return (
    <section>
      <article>
        <Router>
          <TopNavbar />
          <Navbar />
          <TyssRoute />
        </Router>
      </article>
    </section>
  );
};


export default App;
