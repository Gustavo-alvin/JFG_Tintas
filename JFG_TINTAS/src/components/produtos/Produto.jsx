import React, { useState } from 'react'
import './produto.css'
import skylack from '../../img/skylack.png'
import maxirubber from '../../img/maxi-rubber.png'
import sherwin from '../../img/sherwin.png'
import farben from '../../img/farben.png'
import ppg from '../../img/ppg.png'
import brazilian from '../../img/brazilian.png'

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

  return (
    <section className="produto-container">
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