import { Row } from "react-bootstrap";
import ItemColor from "./ItemColor";

const Colores = ({color, setColor}) => {
  return (
    <Row>
          {color.map((color) => (
            <ItemColor
              key={color._id}
              color={color}
              setColor={setColor}
            />
          ))}
    </Row>
  );
};

export default Colores;
