import { Monster } from "../../App";

import "./card.styles.css";

type MonsterCardProps = {
  monster: Monster
}

const MonsterCard = ({ monster }: MonsterCardProps) => {
  const { id, name, email } = monster;
  return (
    <div className="card-container">
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?size=180x180&set=set2`}></img>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

// class MonsterCard extends Component {
//   render() {
//     const { id, name, email } = this.props.monster;

//     const srcUrl = `https://robohash.org/${id}?size=180x180&set=set2`;

//     return (
//       <div className="card-container">
//         <img alt={`monster ${name}`} src={srcUrl}></img>
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

export default MonsterCard;
