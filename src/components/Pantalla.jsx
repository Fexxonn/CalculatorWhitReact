import React from "react";
import "../stylesheets/Pantalla.css";

const Pantalla = ({ input }) => (
  <div className="input">
    <div className="input-numbers">{input}</div>
  </div>
);

export default Pantalla;