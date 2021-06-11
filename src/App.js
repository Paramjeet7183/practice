import React, { useEffect } from "react";
import "./styles/fonts.css";
import "./styles/App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Work from "./Pages/Work";
import Nav from "./Component/Nav";
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
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/work/:id">
            <Work />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
