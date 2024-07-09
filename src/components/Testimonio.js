import React from "react";

function Testimonio() {
  return(
    <div className="contenedor-testimonio">
      <img 
      className="imagen-testimonio"
      src={require('../imagenes/witkin.png')}
      alt="Foto de Witkin"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">Peter Witkin en Estados Unidos</p>
        <p className="cargo-testimonio">Fotógrafo artístico</p>
        <p className="texto-testimonio">La historia del arte ha sido trazada siempre por creadores originales, por verdaderos autores capaces de crear piezas que trascienden su propio tiempo, son artistas que no les importa tratar de complacer a nadie, comprenden que ese no es el propósito de su creación.</p>
      </div>
    </div>
  );
}


export default Testimonio