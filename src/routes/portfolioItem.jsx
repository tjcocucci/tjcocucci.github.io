import Card from '../components/Card.jsx';

export default function PortfolioItem(props) {
  return (
    <Card>
      Portfolio Item + {props.item}
    </Card>
  );
}
