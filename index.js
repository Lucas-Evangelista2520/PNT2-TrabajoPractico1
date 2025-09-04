const productos = [
    { id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
    { id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
    { id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" },
    { id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
    { id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
    ];

// 1
console.log("Nombre del primer producto:", productos[0].nombre);

// 2
console.log("\n--- Lista de productos ---");
for (const producto of productos) {
    console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
}

// 3
console.log("\n--- Lista de productos (usando forEach) ---");
productos.forEach(producto => {
    console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
});

// 4
console.log("\n--- Solo nombres de productos (usando map) ---");
const nombresProductos = productos.map(producto => producto.nombre);
console.log(nombresProductos);



    