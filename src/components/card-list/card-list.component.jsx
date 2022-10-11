import "./card-list.styles.css";
import Card from "../card/card.component";
import add from "../../assets/add.svg";

const CardList = ({ monsters }) => {
  const addMonster = () => {
    var [x, y] = [
      document.getElementsByClassName("inputs")[0],
      document.getElementsByClassName("img")[0],
    ];
    y.style.display = "none";
    x.style.display = "flex";
  };

  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
      <div className="add">
        <div className="inputs">
          <input placeholder="Name" className="name" />
          <input placeholder="Email" className="email" />
          <div className="buttons">
            <input type="button" className="button cyan" value="Add" />
            <input type="button" className="button cyan" value="Cancel" />
          </div>
        </div>
        <div className="img" onClick={addMonster}>
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
