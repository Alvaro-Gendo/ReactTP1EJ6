import { Col } from "react-bootstrap";
import ItemColor from "./ItemColor";

const Colores = (props) => {
  return (
    <Col sm={12} md={4} lg={3}>
      {props.arregloColor.map((color, posicion) => (<ItemColor key={posicion} nombreColor={color} borrarColor={props.borrarColor} />))}
    </Col>
  );
};

export default Colores;
