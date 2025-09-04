import nombresProductos from "./index2.js";

const productos = [
    { id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
    { id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
    { id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" },
    { id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
    { id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
    ];

// 7
console.log("\n-¿Hay productos con precio > $10000?-");
const hayProductoMayorADiezMil = productos.some(producto => producto.precio > 10000);
console.log(hayProductoMayorADiezMil);

// 8
console.log("\n-¿Todos los productos valen mas de $1000");
const todosValenMasDeMil = productos.every(producto => producto.precio > 1000);
console.log(todosValenMasDeMil);

// 9
console.log("\n-¿Hay una campera en la lista de nombres de productos?");
const hayCampera = nombresProductos.includes("Campera");
console.log(hayCampera);
    