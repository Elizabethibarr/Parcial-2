// objetos
const persona = {
    nombre: "Dani",
    edad: 20,
    profesion: "Programador",
    saludar: function() {
        console.log("Hola, soy " + this.nombre);
    }
}

persona.saludar();

// objetos anidados
const universidad = {
    nombre: "UNIVO",
    ubicacion: {
        ciudad: "San Miguel",
        pais: "El Salvador"
    },
    facultades: {
        CienciasYTecnologia: {
            carreras: ["Ingeniería en Sistemas", "Biotecnología", "Matemática Aplicada"]
        }
    }
}

console.log(universidad);