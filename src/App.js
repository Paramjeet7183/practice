import React, { useEffect, useRef } from "react";
import "./styles/fonts.css";
import "./styles/App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Work from "./Pages/Work";
import Nav from "./Component/Nav";
import Footer from "./Component/Footer";
import { Cursor } from "./Component/Cursor";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const root = document.documentElement;
  const width = window.innerWidth;

  window.addEventListener("resize", () => {
    const newWidth = window.innerWidth;
    if (newWidth < 500) {
      if (newWidth !== width) {
        window.location.reload();
      }
    } else {
      window.location.reload();
    }
  });

  useEffect(() => {
    root.style.setProperty("--VW", `${window.innerWidth * 0.01}px`);
    root.style.setProperty("--VH", `${window.innerHeight * 0.01}px`);
  }, [root.style]);
  return (
    <>
      <div className="grain"></div>
      <div className="App">
        <Router>
          <Cursor />
          <Switch>
            <Route path="/" exact>
              <Nav border="#e7e7e7" />
              <Home />
            </Route>
            <Route path="/work/:id" exact>
              <Nav border="#e7e7e7" />
              <Work />
            </Route>
            <Route path="/About" exact>
              <Nav border="#e7e7e7" />
              <About />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
