import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/Header";
import car from "./img/paint_car.jpg";
import Footer from "./components/footer/Footer";
import Produto from "./components/produtos/Produto";
import Button from "./components/zap/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <section className="home" id="home">
        <div className="container">
          <div className="titulo">
            <h1>JFG TINTAS</h1>
            <dd>Automotiva</dd>
          </div>
          <button className="btn-button">Saiba mais</button>
        </div>
        <Button />
      </section>

      <section id="about-us">
        <h1 className="tittle-about">sobre nós</h1>
        <div className="container-about">

          <div className="section-aboutUs">
            <div className="imgs">
              <img src={car} alt="" />
            </div>
            <div className="descripition">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                harum eius velit distinctio molestiae placeat inventore
                assumenda temporibus odio aut, minima molestias eveniet tempora
                laudantium vitae corrupti dolores nihil et.
              </p>
            </div>
          </div>

          <div className="section-aboutUs">
            
          <div className="descripition">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                harum eius velit distinctio molestiae placeat inventore
                assumenda temporibus odio aut, minima molestias eveniet tempora
                laudantium vitae corrupti dolores nihil et.
              </p>
            </div>
            <div className="imgs">
              <img src={car} alt="" />
            </div>
          </div>
          <div className="section-aboutUs">
            <div className="imgs">
              <img src={car} alt="" />
            </div>
            <div className="descripition">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                harum eius velit distinctio molestiae placeat inventore
                assumenda temporibus odio aut, minima molestias eveniet tempora
                laudantium vitae corrupti dolores nihil et.
              </p>
            </div>{" "}
          </div>
        </div>
      </section>

      <section id="products">
        <h1 className="tittle-products">Produtos</h1>
        <Produto />
        
      </section>
      
      <Footer />
    </>
  );
}

export default App;
