const URL = "http://localhost:4000/apicolor/color";

export const consultaAPI = async () => {
    try {
      const respuesta = await fetch(URL);
      const listaColor = await respuesta.json();
      return listaColor;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const crearColorAPI = async (itemColor) => {
    try {
      const respuesta = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemColor)
      });
      return respuesta
    } catch (error) {
      console.log(error);
    }
  };
  
  export const borrarColorAPI = async (id) =>{
      try {
          const respuesta = await fetch(URL + "/" + id, {
            method: "DELETE"
          });
          return respuesta;
        } catch (error) {
          console.log(error);
        }
  }