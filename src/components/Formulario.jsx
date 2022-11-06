import { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { consultaAPI, crearColorAPI } from "../helpers/queires";
import Colores from "./Colores";

const Formulario = () => {
  
  const [color, setColor] = useState([]);

  useEffect(() => {
    consultaAPI().then((respuesta) => {
      setColor(respuesta);
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      colorHexa: "",
    },
  });

  const onSubmit = (datos) => {
    crearColorAPI(datos).then((respuesta) => {
      if (respuesta.status === 201) {
        Swal.fire(
          "Producto creado",
          "El producto fue creado correctamente",
          "success"
        );
        reset();
        consultaAPI().then((respuesta) => {
          setColor(respuesta);
        });
      } else {
        Swal.fire("Ocurrio un error", "Vuelve a intentar", "error");
      }
    });
  };

  return (
    <>
      <Card className="row m-2">
        <Card.Header className="text-center">
          Administrador de Colores
        </Card.Header>
        <Row>
          <Form className="m-3" onSubmit={handleSubmit(onSubmit)}>
            <Col>
              <Form.Group className="d-flex justify-content-around">
                <Card className="color">
                  <img
                    src="https://renataenamorada.com/wp-content/uploads/2014/04/Rueda_colores_newton.jpg"
                    alt="Paleta de Colores"
                    className="img-fluid w-100"
                  />
                </Card>
                <Form.Control
                  required
                  type="text"
                  placeholder="Ingrese un color en heg"
                  className="m-5 w-25"
                  minLength={4}
                  maxLength={7}
                  {...register("colorHexa", {
                    required: "Campo olbigatorio",
                    minLength: {
                      value: 4,
                      message: "Minimo 4 caracteres",
                    },
                    maxLength: {
                      value: 7,
                      message: "Maximo 7 caracteres",
                    },
                    pattern:{
                      value: /^#[a-zA-Z0-9]{6}|rgb\((?:\s*\d+\s*,){2}\s*[\d]+\)|rgba\((\s*\d+\s*,){3}[\d]+\)|hsl\(\s*\d+\s*(\s*\s*\d+){2}\)|hsla\(\s*\d+(\s*,\s*\d+\s*){2}\s*\s*[\d]+\)$/,
                      message: "Ingresar color en hex."
                    }
                  })}
                ></Form.Control>
                <Form.Text className="text-danger">
                  {errors.colorHexa?.message}
                </Form.Text>
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
        <Colores setColor={setColor} color={color} />
      </Row>
    </>
  );
};

export default Formulario;
