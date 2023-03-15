import Card from '../components/Card.jsx';
import Slideshow from '../components/Slideshow.jsx';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
  {
    url: 'https://i.imgur.com/W1LlZKO.jpg',
    caption: 'Ruta 40 Kilómetro 4020 (Canon Powershot SX50 HS)',
  },
  {
    url: 'https://i.imgur.com/mQR3HZf.jpg',
    caption:
      'Vicuñas camino a Antofagasta de la Sierra (Canon Powershot SX50 HS)',
  },
  {
    url: 'https://i.imgur.com/9Vk7cC3.jpg',
    caption: 'Campo de piedra pómez (Canon Powershot SX50 HS)',
  },
  {
    url: 'https://i.imgur.com/kgOkDoo.jpg',
    caption: 'Amanecer en Antofagasta (Canon Powershot SX50 HS)',
  },
  {
    url: 'https://i.imgur.com/V0xiyZH.jpg',
    caption: 'Flores amarillas en Cuesta Blanca (Nikon FE2 Kodak Color)',
  },
  {
    url: 'https://i.imgur.com/ohEXfjA.jpg',
    caption: 'Cajones en Cuesta Blanca (Nikon FE2 Kodak Color)',
  },
  {
    url: 'https://i.imgur.com/XLrtTjW.jpg',
    caption: 'Gauchito Gil en Famatina (Nikon FE2 Kodak Color)',
  },
  {
    url: 'https://i.imgur.com/Uo1ysam.jpg',
    caption:
      'Fotógrafo fotografiado el campo de piedra pómez (Nikon FE2 Kodak Color)',
  },
  {
    url: 'https://i.imgur.com/XnWafr4.jpg',
    caption: 'Campo de piedra pómez (Nikon FE2 Kodak Color)',
  },
  {
    url: 'https://i.imgur.com/5GvmJNT.jpg',
    caption: 'Volcán Lanin (Nikon ???)',
  },
  {
    url: 'https://i.imgur.com/NpYIbLc.jpg',
    caption: 'Abejorro en algún lugar de la Patagonia (Nikon ???)',
  },
];

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '800px',
};

export default function Interests() {
  return (
    <>
      <Card>
        <p>
          Me interesa el cine y registro las películas que veo en mi cuenta de{' '}
          <a href="https://letterboxd.com/CarsetusPex/" target="_blank">
            letterboxd
          </a>
          .
        </p>
      </Card>
      <Card>
        <p>
          Cuando puedo leo. Llevo un diario de mis lecturas en{' '}
          <a
            href="https://www.goodreads.com/user/show/135462098-tadeo-cocucci"
            target="_blank"
          >
            goodreads
          </a>
          .
        </p>
      </Card>
      <Card>
        Me gusta sacar fotos, especialmente de viajes. Acá tengo algunas de
        viajes al Cuyo y Patagonia Argentina. Algunas son con cámaras digitales
        y otras con una cámara analógica{' '}
        <a href="https://en.wikipedia.org/wiki/Nikon_FE2">Nikon FE2</a>.
        <Slideshow images={slideImages} />
      </Card>
    </>
  );
}
