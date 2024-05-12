import React from "react";
import Router from "./Router";

const App = () => {
  return (
    <div className="App">
      <h1 className="mainTitle">Welcome to MoviePark!</h1>
      <div className="mainContent">
        <Router />
      </div>
    </div>
  );
};

export default App;
