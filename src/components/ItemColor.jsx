import { Card, Button, Col } from "react-bootstrap";

const ItemColor = (props) => {
  return (
    <Col sm={12} md={4} lg={3}>
      <Card className="m-2">
        <Card.Title className="mx-3">{props.nombreColor}</Card.Title>
        <Card.Body>
          <div
            className="color"
            style={{ background: props.nombreColor }}
          ></div>
          <div className="d-flex justify-content-end">
            <Button
                className="m-2"
              variant="danger"
              onClick={() => props.borrarColor(props.nombreColor)}>
              Borrar
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ItemColor;
