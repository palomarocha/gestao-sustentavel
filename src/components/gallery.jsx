import './gallery.css';
import Planta1 from '../assets/images/planta1.jpg';
import Planta2 from '../assets/images/planta2.jpg';
import Planta3 from '../assets/images/planta3.jpg';

export default function Gallery() {
  return (
    <section id="galeria" className="gallery">
      <h2>Galeria</h2>
      <div className="images">
        <img src={Planta1} alt="Planta 1" />
        <img src={Planta2} alt="Planta 2" />
        <img src={Planta3} alt="Planta 3" />
      </div>
    </section>
  );
}
