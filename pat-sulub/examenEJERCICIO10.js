
const productos = [
    {
        nombre: "Manzana",
        precio: 12,
        stock: 40
    },
    {
        nombre: "Leche",
        precio: 25,
        stock: 10
    },
    {
        nombre: "Pan",
        precio: 8,
        stock: 60
    }
];

productos.forEach(producto => {
    if (producto.stock > 20) {
        console.log(
            "Nombre: " + producto.nombre +
            " | Precio: $" + producto.precio
        );
    }
});