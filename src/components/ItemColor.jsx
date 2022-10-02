import { Card, Button } from "react-bootstrap";

const ItemColor = (props) => {
  return (
    <Card className="m-2">
      <Card.Title className="mx-3">{props.nombreColor}</Card.Title>
      <Card.Body>
        <div className="color"></div>
        <div className="d-flex justify-content-end">
          <Button
            variant="danger"
            onClick={() => props.borrarColor(props.nombreColor)}>Borrar</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ItemColor;
