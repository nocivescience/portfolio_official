const colores = {
    rojo: 5,
    azul: 3,
    verde: 2,
    amarillo: 1,
    rosa: 2
  };
  
  // const conteoColores = Object.keys(colores).reduce((conteo, color) => {
  //   console.log(conteo);
  //   conteo[color] = colores[color];
  //   return conteo;
  // }, {});

const claves= Object.keys(colores);
const conteoColores = claves.reduce((conteo, color) => {
    console.log(conteo);
    conteo[color] = colores[color];
    return conteo;
}, {});
console.log(conteoColores);