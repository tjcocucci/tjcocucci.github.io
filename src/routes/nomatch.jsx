import Card from '../components/Card.jsx';
import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <Card>
      <p>
        No conozco esa URL, pero podés regresar a la{' '} 
        <Link to="/">página inicial.</Link>
      </p>
    </Card>
  );
}
