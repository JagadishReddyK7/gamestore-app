import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const text = "Hello World";
  const handleButton = () => {
    console.log("Clicked my button")
  }
  return (
    <>
      <Button color = "secondary" onSelectButton = {handleButton}>My Button</Button>
    </>
  );
}

export default App;
