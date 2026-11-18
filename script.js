
// Mostrar el año actual automáticamente
document.getElementById("year").textContent =
    new Date().getFullYear();

// Mensaje de bienvenida en la consola
console.log("¡Bienvenidos a mi página personal!");

// Efecto de bienvenida
window.addEventListener("load", function() {
    console.log("La página de Angela se ha cargado correctamente.");
});
