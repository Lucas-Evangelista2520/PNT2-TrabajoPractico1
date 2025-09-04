const productos = [
    { id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
    { id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
    { id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" },
    { id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
    { id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
    ];

// 4
console.log("-Solo nombres de productos (usando map)-");
const nombresProductos = productos.map(producto => producto.nombre);
console.log(nombresProductos);

// 5
console.log("\n-Productos de categoría 'Ropa' (usando filter)-");
const productosRopa = productos.filter(producto => producto.categoria === "Ropa");
console.log(productosRopa);

// 6
console.log("\n-Productos especifico (Gorra)-");
const productoEspecifico = productos.find(producto => producto.nombre === "Gorra");
console.log(productoEspecifico);




    