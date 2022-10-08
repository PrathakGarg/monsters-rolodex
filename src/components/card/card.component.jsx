import "./card.styles.css";

const MonsterCard = ({ monster: { id, name, email } }) => (
  <div className="card-container">
    <img
      alt={`monster ${name}`}
      src={`https://robohash.org/${id}?size=180x180&set=set2`}></img>
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
);

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
