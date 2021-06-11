import React from "react";
import { useLocation } from "react-router-dom";
function Work() {
  const { state } = useLocation();
  return (
    <div>
      {state.works.name}
      <br />
      {state.works.id}
    </div>
  );
}

export default Work;
