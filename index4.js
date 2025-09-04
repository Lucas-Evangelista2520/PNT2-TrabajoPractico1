const productos = [
    { id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
    { id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
    { id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" },
    { id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
    { id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
    ];

// 11  
console.log("\n-Productos ordenados por precio de menor a mayor");
const productosOrdenados = productos.sort((a, b) => a.precio - b.precio); // tambien ordena la array original
console.log(productosOrdenados);

// 12
console.log("\n-Array Mensajes personalizados");
const mensajesPersonalizados = productos.map(producto => `El producto ${producto.nombre} cuesta $${producto.precio} y pertenece a la categoria ${producto.categoria}`);
console.log(mensajesPersonalizados);

// 13 
console.log("\n-Agregando productos con spread");
const productosNuevos = [
    {id: 6, nombre: "Botines", precio: 3000, categoria: "Calzado"},
    {id: 7, nombre: "Chaleco", precio: 1000, categoria: "Ropa"},
    {id: 8, nombre: "Lentes", precio: 1200, categoria: "Accesorios"},
    {id: 9, nombre: "Saco de abrigo", precio: 9500, categoria: "Ropa"},
    {id: 10,nombre: "Shorts", precio: 2500, categoria: "Ropa"},
    ];
const listaProductosCombinados = [...productos, ...productosNuevos];
console.log("\n-Lista de productos combinados");
console.log(listaProductosCombinados);