import { Card, Button, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import { consultaAPI, borrarColorAPI } from "../helpers/queires";

const ItemColor = ({ color, setColor }) => {

  const borrar = () => {
    Swal.fire({
      title: "Estas seguro?",
      text: "No podras revertir este paso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borralo!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarColorAPI(color._id).then((respuesta) => {
          if (respuesta.status === 200) {
            consultaAPI().then((respuesta) => {
              setColor(respuesta);
            });
            Swal.fire("Borrado!", "El producto fue borrado.", "success");
          } else {
            Swal.fire("Se produjo un error", "Prube mas tarde", "error");
          }
        });
      }
    });
  };

  return (
    <Col sm={12} md={4} lg={3}>
      <Card className="m-2">
        <Card.Title className="mx-3">{color.colorHexa}</Card.Title>
        <Card.Body>
          <div className="color" style={{ background: color.colorHexa }}></div>
          <div className="d-flex justify-content-end">
            <Button className="m-2" variant="danger" onClick={borrar}>
              Borrar
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ItemColor;
