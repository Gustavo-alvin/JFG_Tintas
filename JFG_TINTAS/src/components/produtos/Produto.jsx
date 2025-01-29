import React, { useEffect, useState } from 'react'
import './produto.css'
import skylack from '../../img/skylack2.png'
import maxirubber from '../../img/maxi.jpg'
import sherwin from '../../img/sherwin.png'
import farben from '../../img/farben2.png'
import ppg from '../../img/PPG_Logo.svg.png'
import brazilian from '../../img/brazilian.png'
import ScrollReveal from 'scrollreveal';

const Produto = () => {

    const [produtos, setProdutos] = useState([
        {
            id: 1,
            img: skylack,
        },
        {
            id: 2,
            img: maxirubber,
        },
        {
            id: 3,
            img: sherwin,
        },
        {
            id: 4,
            img: farben,
        },
        {
            id: 5,
            img: ppg,
        },
        {
            id: 6,
            img: brazilian,
        }
    ])

    useEffect(() => {
        
        ScrollReveal().reveal('#reveal', {
          distance: '50px',
          duration: 1000,
          easing: 'ease-in-out',
          opacity: 0,
          scale: 0.85,
          origin: 'bottom',
          reset: true,
        });
      }, []);

  return (
    <section className="produto-container" id='reveal'>
    {produtos.map((produto) => (
        <article key={produto.id} className="produto-card">
            <img 
                src={produto.img} 
                className="produto-imagem"
            />
        </article>
    ))}
</section>
  )
}

export default Produto