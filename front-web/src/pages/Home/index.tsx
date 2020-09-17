import React from 'react'
import { ReactComponent as ArowIcon } from '../../assets/arrow.svg'
import { ReactComponent as GamerImage } from '../../assets/gamer.svg'
import { Link } from 'react-router-dom'
import './styles.css'

const Home = () => (
    <div className="home-container">
        <div className="home-text">
            <h1 className="home-text-title">
                Quais são os jogos que a malta mais gosta?
            </h1>
            <h3 className="home-text-subtitle">
                Clique no botão abaixo e saiba quais são os jogos mais escolhidos pelos gamers!
            </h3>
            <Link to="/records">
                <div className="home-actions">
                    <button className="home-btn">
                        QUERO SABER QUAIS SÃO
                </button>
                    <div className="home-btn-icon">
                        <ArowIcon />
                    </div>
                </div>
            </Link>
        </div>
        <GamerImage className="home-image" />
    </div>
)

export default Home