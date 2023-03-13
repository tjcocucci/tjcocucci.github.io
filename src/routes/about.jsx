import Card from '../components/Card.jsx';
import cv from '../../static/cv.pdf';

export default function About() {
  return (
    <>
      <Card>
        <a href={cv} target="_blank">
          Acá
        </a>{' '}
        tengo un pdf de mi currículum
      </Card>
    </>
  );
}
