import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Description from "./components/Description";
import Name from "./components/Name";
import Price from "./components/Price";
import Image from "./components/Image";

const firstName = "Fatma";
const App = () => {
  return (
    <div className="App">
      <Card style={{ width: "25rem", margin: "30px auto" }}>
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
      {firstName ? (
        <>
          <h3>Hello, {firstName}!</h3>

          <img
            src="/image/nature2.jpg"
            alt="Welcome"
            style={{
              width: "150px",
              height: "150px",
              objectFit: "cover",
              borderRadius: "50%",
              marginTop: "15px",
            }}
          />
        </>
      ) : (
        <h3>Hello, there!</h3>
      )}
    </div>
  );
};

export default App;
