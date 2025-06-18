const empleados = [
    { id: 1, nombre: "Laura", ventas: [300, 500, 100] },
    { id: 2, nombre: "Carlos", ventas: [400, 200] },
    { id: 3, nombre: "Ana", ventas: [100, 200, 300, 100] },
   ];

/// Enunciado:
/// Calcular el total de ventas por empleado, luego ordenar y devolver
let total=[]
let sumatoria=

empleados.forEach((item)=>
l  )

/// los 2 mejores vendedores junto a su total.
/// Resultado esperado:
/// [{ nombre: "Laura", total: 900 }, { nombre: "Carlos", total: 600 }]














//Buscar empleado 
let preguntaNombre = prompt(`Ingrese el nombre del empleado:`);
const search = empleados.filter((item) => item.nombre === preguntaNombre)
