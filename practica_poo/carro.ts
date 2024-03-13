class Carro {
    marca:string;
    modelo:number;
    velocidad:number;

    constructor (marca:string,modelo:number){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = 0;
    }
    acelerar (velocidadIncremento:number): void{
        this.velocidad += velocidadIncremento;
        console.log('El ' + this.marca + ' esta acelerando a ' + this.velocidad + ' km/h')
    }
}

let carroS = new Carro("Chevrolet", 2023);
carroS.acelerar(40);