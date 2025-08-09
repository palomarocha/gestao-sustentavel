import globoFofo from '../assets/images/globo-fofo.png';
import './about.css';

export default function About() {
    return (
        <section id="sobre" className="about">
            <div className="about-content">
                <div className="text">
                    <h2>Sobre o Projeto</h2>
                    <p>
                       O projeto, alinhado ao ODS 12, promove a gestão 
                       sustentável dos recursos naturais e o consumo 
                       consciente para proteger o meio ambiente.
                    </p>
                </div>
                <div className="image">
                    <img src={globoFofo} alt="Globo fofo" />
                </div>
            </div>
        </section>
    );
}
