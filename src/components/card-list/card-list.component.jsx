import "./card-list.styles.css";
import Card from "../card/card.component";
import add from "../../assets/add.svg";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
      <div className="add">
        <div className="img">
          <img src={add} />
        </div>
      </div>
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
