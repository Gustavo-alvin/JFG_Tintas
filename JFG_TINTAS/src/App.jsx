import { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/Header";
import car from "./img/paint_car.jpg";
import tintas from './img/tintas.jpg';
import Footer from "./components/footer/Footer";
import Produto from "./components/produtos/Produto";
import Button from "./components/zap/Button";
import ScrollReveal from 'scrollreveal';

function App() {
  const sobreRef = useRef(null);

  const scrollToSection = () => {
    if (sobreRef.current) {
      sobreRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
   
    ScrollReveal().reveal('#reveal', {
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      opacity: 0,
      scale: 0.85,
    });
  }, []);

  return (
    <>
      <Header />
      <section className="home" id="home">
        <div className="container">
          <div className="titulo">
            <h1>JFG TINTAS</h1>
            <dd>Automotiva</dd>
          </div>
          <button className="btn-button" onClick={scrollToSection}>Saiba mais</button>
        </div>
        <Button />
      </section>

      <section ref={sobreRef} id="about-us">
        <h1 className="tittle-about">sobre nós</h1>
        <div className="container-about">
          <div className="section-aboutUs">
            <div className="imgs">
              <img src={car} alt="" />
            </div>
            <div className="descripition">
              <h2>
                <strong>Missão</strong>
              </h2>
              <br />
              <br />

              <p className="text" id="reveal">
                Oferecer soluções inovadoras e personalizadas em tintas
                automotivas, proporcionando qualidade, durabilidade e excelência
                aos nossos clientes. Nosso compromisso é garantir a melhor
                experiência, atendendo às necessidades do mercado automotivo com
                produtos de alta performance e atendimento especializado.
              </p>
            </div>
          </div>

          <div className="section-aboutUs">
            <div className="descripition">
              <h2>
                <strong>Visão</strong>
              </h2>
              <br />
              <br />
              <p className="text" id="reveal">
                Ser reconhecida como líder no mercado de tintas automotivas,
                destacando-se pela inovação, qualidade e personalização.
                Queremos inspirar confiança e ser a primeira escolha de clientes
                e parceiros em todo o Brasil, contribuindo para a evolução do
                setor automotivo.
              </p>
            </div>
            <div className="imgs">
              <img src={tintas} alt="" className="imgs-about" />
            </div>
          </div>
          <div className="section-aboutUs">
            <div className="imgs">
              <img src={car} alt="" id="img3" className="imgs-about" />
            </div>
            <div className="descripition">
              <h2>
                <strong>Valores</strong>
              </h2> <br /><br />
              <p className="text" id="reveal">
                Na JFG Tintas Automotivas, acreditamos que a qualidade é a base
                do nosso trabalho, garantindo que cada produto entregue atenda
                aos mais altos padrões do mercado. Buscamos constantemente a
                inovação, trazendo novas soluções e tecnologias para oferecer o
                melhor em tintas automotivas. Nosso compromisso com o
                atendimento vai além da venda, priorizando sempre a satisfação e
                a experiência positiva de nossos clientes.<br /><br /> Além disso,
                valorizamos a personalização, pois sabemos que cada projeto é
                único e merece um acabamento exclusivo. Também temos um forte
                compromisso com a sustentabilidade, adotando práticas
                responsáveis para minimizar impactos ambientais. Com mais de 20
                anos de tradição e confiança no setor, construímos relações
                sólidas com nossos clientes e parceiros, sempre pautadas na
                ética, no respeito e na transparência.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="products">
        <h1 className="tittle-products">Produtos</h1>
        <Produto id="reveal" />
      </section>

      <Footer />
    </>
  );
}

export default App;
