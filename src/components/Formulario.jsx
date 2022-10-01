import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const Formulario = () => {
  return (
    <Card>
      <Card.Header className="text-center">
        Administrador de Colores
      </Card.Header>
      <Row>
        <Form className="m-3">
          <Col>
            <Form.Group className="d-flex justify-content-around">
              <Card className="color"></Card>
              <Form.Control
                required
                type="text"
                placeholder="Ingrese un color"
                className="m-5 w-50"
                minLength={4}
                maxLength={10}
              ></Form.Control>
            </Form.Group>
          </Col>
        <Col className="d-flex justify-content-end">
          <Button className="mx-5 my-2" type="submit">
            Ingresar
          </Button>
        </Col>
        </Form>
      </Row>
    </Card>
  );
};

export default Formulario;
