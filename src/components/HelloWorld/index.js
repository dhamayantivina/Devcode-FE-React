// Uncomment this line
import { Link } from "react-router-dom";
import devcodeLogo from "../../assets/devcode-logo.png";
import "./style.css";

export const HelloWorld = () => {
  return (
    <div className="hello">
      <img data-cy="devcode-logo" src={devcodeLogo} alt="devcode logo" />
      <div data-cy="devcode-title">
        <h1>I'm ready for the next challenge!</h1>
      </div>
      <div data-cy="router-button">
        <Link to={`/contacts`} className="router__btn">
          Level Selanjutnya
        </Link>
      </div>
    </div>
  );
};
