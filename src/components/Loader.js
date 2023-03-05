import spinner from "../assets/spinner.gif";
import "../../src/styles.css";

const Loader = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img alt="spinner" src={spinner} />
      <h2>Loading...</h2>
    </div>
  );
};

export default Loader;
