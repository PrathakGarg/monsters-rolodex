import "./search-box.styles.css";

// interface ISearchBoxProps extends IChangeHandlerProps {
//   className: string;
//   placeholder?: string;
// }

// interface IChangeHandlerProps {
//   onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={e => onChangeHandler(e)}
  />
);

// class SearchBox extends Component {
//   render() {
//     return (
//       <input
//         className={`search-box ${this.props.className}`}
//         type="search"
//         placeholder={this.props.placeholder}
//         onChange={this.props.onChangeHandler}
//       />
//     );
//   }
// }

export default SearchBox;
