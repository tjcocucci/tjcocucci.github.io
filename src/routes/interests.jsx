import Card from '../components/Card.jsx';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 1',
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'Slide 2',
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 3',
  },
];

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px',
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
        Fotos
        <Slide autoplay={false}>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              >
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))}
        </Slide>
      </Card>
    </>
  );
}
