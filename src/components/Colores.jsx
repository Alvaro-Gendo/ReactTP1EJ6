import { Row } from "react-bootstrap";
import ItemColor from "./ItemColor";

const Colores = (props) => {
  return (
    <Row>
          {props.arregloColor.map((color, posicion) => (
            <ItemColor
              key={posicion}
              nombreColor={color}
              borrarColor={props.borrarColor}
            />
          ))}
    </Row>
  );
};

export default Colores;
