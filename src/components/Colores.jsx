import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const Colores = () => {
  return (
      <Row className="d-flex mt-5">
        <Col sm={12} md={6} lg={3}>
          <Card>
            <Card.Title className="mx-3">Nombre de color</Card.Title>
            <Card.Body>
              <div className="color"></div>
              <div className="d-flex justify-content-end">
                <Button variant="danger">Borrar</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
  );
};

export default Colores;
