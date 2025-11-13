const contenedor = document.getElementById("contenedor-tarjetas");
const boton = document.getElementById("generar-btn");


const nombres = ["Lucía", "Mario", "Elena", "Carlos", "Laura", "Diego", "Juan", "Pedro", "Marcos", "Ivan"];
const apellidos = ["García", "Ruiz", "Santos", "López", "Martín"];


class Usuario {
  constructor(nombre, edad, email, activo) {
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
    this.activo = activo;
    this.fecha = new Date(); 
  }


  mostrarFecha() {
    return `Fecha: ${this.fecha.toLocaleDateString("es-ES")}`;
  }

  rangoEdad() {
    if (this.edad < 30) return "joven";
    if (this.edad < 50) return "adulto";
    return "senior";
  }
}

function generarUsuarios(cantidad) {
  const lista = [];

  for (let i = 0; i < cantidad; i++) {

    const nombreCompleto =
      nombres[Math.floor(Math.random() * nombres.length)] +
      " " +
      apellidos[Math.floor(Math.random() * apellidos.length)];

    const edad = Math.floor(Math.random() * (65 - 18 + 1)) + 18;

    const email = nombreCompleto.toLowerCase().replace(" ", ".") + "@mail.com";

    const activo = Math.random() > 0.5;

    lista.push(new Usuario(nombreCompleto, edad, email, activo));
  }

  mostrarUsuarios(lista);
}

function mostrarUsuarios(lista) {
  contenedor.innerHTML = "";

  lista.forEach((user) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    let colorEstado = user.activo ? "green" : "red";

    tarjeta.innerHTML = `
      <h2>${user.nombre}</h2>
      <p><strong>Edad:</strong> ${user.edad} (${user.rangoEdad()})</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Estado:</strong> 
         <span style="color:${colorEstado}">
           ${user.activo ? "Si" : "No"}
         </span>
      </p>
      <p>${user.mostrarFecha()}</p>
    `;

    contenedor.appendChild(tarjeta);
  });
}

boton.addEventListener("click", () => {
  const cantidad = Number(prompt("¿Cuántos usuarios quieres generar?"));

  if (isNaN(cantidad) || cantidad <= 0) {
    alert("Introduce un número válido");
    return;
  }

  generarUsuarios(cantidad);
});
