import React from "react";
import MarketingApp from "./components/MarketingApp";
import AngularApp from "./components/AngularApp";


export default () => {
  return (
    <div>
      <h1>Desde el contenedor</h1>
      <hr/>
      <MarketingApp />
      <AngularApp />
    </div>
  );
};
