import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import Formulario from "./components/Formulario";
import "./style.css"

function App() {
  return (
    <Container className="App mt-5">
      <Formulario/>
    </Container>
  );
}

export default App;
