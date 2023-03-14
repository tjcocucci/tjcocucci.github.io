import Card from '../components/Card.jsx';
import Academic from './portfolio/Academic.jsx';
import Web from './portfolio/Web.jsx';
import Unity from './portfolio/Unity.jsx';

export default function PortfolioItem(props) {
  let content;
  switch (props.item) {
    case 'academic':
      console.log(props.item);
      content = <Academic />;
      break;
    case 'web':
      content = <Web />;
      break;
    case 'unity':
      content = <Unity />;
      break;
    default:
      content = <Academic />;
  }

  return content;
}
