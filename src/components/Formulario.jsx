import { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import Colores from "./Colores";

const Formulario = () => {
  const colorRegExp = new RegExp(
    /^#[a-zA-Z0-9]{6}|rgb\((?:\s*\d+\s*,){2}\s*[\d]+\)|rgba\((\s*\d+\s*,){3}[\d]+\)|hsl\(\s*\d+\s*(\s*\s*\d+){2}\)|hsla\(\s*\d+(\s*,\s*\d+\s*){2}\s*\s*[\d]+\)$/
  );

  const colorLS = JSON.parse(localStorage.getItem("arregleColor")) || [];
  const [color, setColor] = useState("");
  const [arregloColor, setArregloColor] = useState(colorLS);

  useEffect(()=>{
    localStorage.setItem("arregleColor", JSON.stringify(arregloColor))
  },[arregloColor])

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(colorRegExp.test(color)){
      setArregloColor([...arregloColor, color]);
      setColor("")
    }else{
      alert("Algo va mal")
    }
  }

  const borrarColor = (nombre) => {
    let modColor = arregloColor.filter((item) =>(item !== nombre));
    setArregloColor(modColor)
  }

  return (
    <>
      <Card className="row m-2">
        <Card.Header className="text-center">
          Administrador de Colores
        </Card.Header>
        <Row>
          <Form className="m-3" onSubmit={handleSubmit}>
            <Col>
              <Form.Group className="d-flex justify-content-around">
                <Card className="color"><img src="https://renataenamorada.com/wp-content/uploads/2014/04/Rueda_colores_newton.jpg" alt="Paleta de Colores" className="img-fluid w-100" /></Card>
                <Form.Control
                  required
                  type="text"
                  placeholder="Ingrese un color en heg"
                  className="m-5 w-25"
                  minLength={4}
                  maxLength={6}
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
      <Row>
          <Colores arregloColor={arregloColor} borrarColor={borrarColor}/>
      </Row>
    </>
  );
};

export default Formulario;
