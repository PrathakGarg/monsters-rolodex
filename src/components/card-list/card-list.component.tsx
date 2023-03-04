import Card from "../card/card.component";
import AddCard from "../add-card/add-card.component";
import { Monster } from "../../App";

import "./card-list.styles.css";

type CardListProps = {
  monsters: Monster[]
}

const CardList = ({ monsters }: CardListProps) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
      <AddCard />
    </div>
  );
};

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;

//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <Card key={monster.id} monster={monster} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
