import { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import Colores from "./Colores";

const Formulario = () => {
  const colorLS = JSON.parse(localStorage.getItem("arregleColor")) || [];
  const [color, setColor] = useState("");
  const [arregloColor, setArregloColor] = useState(colorLS);

  useEffect(()=>{
    localStorage.setItem("arregleColor", JSON.stringify(arregloColor))
  },[arregloColor])

  const handleSubmit = (e) =>{
    e.preventDefault();
    setArregloColor([...arregloColor, color]);
    setColor("")
  }

  const borrarColor = (nombre) => {
    let modColor = arregloColor.filter((item) =>(item !== nombre));
    setArregloColor(modColor)
  }

  return (
    <>
      <Card>
        <Card.Header className="text-center">
          Administrador de Colores
        </Card.Header>
        <Row>
          <Form className="m-3" onSubmit={handleSubmit}>
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
                  onChange={(e) => setColor(e.target.value)}
                  value={color}
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
        <Row className="mt-3">
          <Colores arregloColor={arregloColor} borrarColor={borrarColor}/>
        </Row>
    </>
  );
};

export default Formulario;
