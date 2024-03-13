class Persona {
   private nombre:string;
   private apellido:string;
   private edad:number;

   constructor (nombre: string, edad:number){
    this.nombre = nombre;
    this.edad = edad;
   }
   saludar (){
    console.log('Hola soy ' + this.nombre + "y tengo " + this.edad);
   }
}

let estudiante1 = new Persona("Alex", 17);
estudiante1.saludar()