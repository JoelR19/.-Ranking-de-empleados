const empleados = [
    { id: 1, nombre: "Laura", ventas: [300, 500, 100] },
    { id: 2, nombre: "Carlos", ventas: [400, 200] },
    { id: 3, nombre: "Ana", ventas: [100, 200, 300, 100] },
   ];

/// Enunciado:
/// Calcular el total de ventas por empleado, luego ordenar y devolver
/// los 2 mejores vendedores junto a su total.
/// Resultado esperado:
/// [{ nombre: "Laura", total: 900 }, { nombre: "Carlos", total: 600 }]

empleados.forEach((item) => {let sumatoria=0; item.ventas.forEach((venta) => {sumatoria+=venta}); item.ventas=sumatoria}); console.log(empleados)













//Buscar empleado 
let preguntaNombre = prompt(`Ingrese el nombre del empleado:`);
const search = empleados.filter((item) => item.nombre === preguntaNombre)
// Agregar empleado 
function agregarEmpleado() {
    // Preguntar rl id y nombre
    const id = parseInt(prompt("Ingrese el ID del nuevo empleado:"));
    const nombre = prompt("Ingrese el nombre del nuevo empleado:");
    
    // Preguntar las ventas y que se separen por comas
    const ventasInput = prompt("Ingrese las ventas (separadas por comas, ej: 100,200,300):");
    const ventas = ventasInput.split(',').map(Number);

    // Validar los tipos de string
    if (isNaN(id) || !nombre || ventas.some(isNaN)) {
        alert("Entrada inválida. Por favor, asegúrese de ingresar datos correctos.");
        return;
    }

    empleados.push({ id, nombre, ventas });
    alert(`¡Empleado ${nombre} agregado con éxito!`);
}

// Call the function to add an employee
agregarEmpleado();