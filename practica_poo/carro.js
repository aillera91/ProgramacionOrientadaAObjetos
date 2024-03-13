var Carro = /** @class */ (function () {
    function Carro(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = 0;
    }
    Carro.prototype.acelerar = function (velocidadIncremento) {
        this.velocidad += velocidadIncremento;
        console.log('El ' + this.marca + ' esta acelerando a ' + this.velocidad + ' km/h');
    };
    return Carro;
}());
var carroS = new Carro("Chevrolet", 2023);
carroS.acelerar(40);
