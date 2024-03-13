var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.saludar = function () {
        console.log('Hola soy ' + this.nombre + "y tengo " + this.edad);
    };
    return Persona;
}());
var estudiante1 = new Persona("Alex", 17);
estudiante1.saludar();
