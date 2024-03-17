import Calculator from "../calculator/Calculator";
import "../style/App.css";
const Home = () => {
  return (
    <div>
      <div>
        <h1 className="headingColor">Simple Calculator</h1>
      </div>
      <div>
        <Calculator />
      </div>
    </div>
  );
};

export default Home;
