import React from "react";
import "./styles.css";
import Button from "./Download";
import Navbar from "./nav";
import About from "./About";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="text">
        <h1>npty client</h1>
        <h2>چیت زدن بدون بن (:</h2>
        <Button />
      </div>
      <div className="what_is">
        <About />
      </div>
      <div className="img">
        <div className="grid-container">
          <div className="grid-item">
            <img
              className="tree"
              src="https://www.minecraft.net/content/dam/minecraft/pmp/pmp-minecraft-howitworks-beresourceful.png"
            />
          </div>
          <div className="grid-item"></div>
          <div className="grid-item">
            <img
              className="piston"
              src="https://www.minecraft.net/content/dam/minecraft/pmp/pmp-minecraft-howitworks-buildsomething.png"/>
          </div>
        </div>
        <div className="footer">
          <p>©nopetoyou1111</p>
        </div>
      </div>
    </div>
  );
}
