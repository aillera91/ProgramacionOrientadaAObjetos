<?php
class Nequi
{
    private $titular;
    private $saldo;

    public function __construct($titular, $saldo = 0)
    {
        $this->titular = $titular;
        $this->saldo = $saldo;
    }
    public function depositar($monto)
    {
        if ($monto > 0) {
            $this->saldo += $monto;
            echo "Transferencia exitosa. Nuevo saldo: $this->saldo <br>";
        } else {
            echo "Debes consignar una cantidad mayor que a 0";
        }
    }
    public function retirar($monto)
    {
        if ($monto > 0) {
            if ($this->saldo >= $monto) {
                $this->saldo -= $monto;
                echo "Retiro de monto realizado. Nuevo saldo: $this->saldo <br>";
            } else {
                echo "No tienes suficientes fondos para retirar la cantidad deseada";
            }
        } else {
            echo "El monto a retirar debe ser mayor a cero (0)";
        }
    }

    public function obtenerSaldo() {
        echo "Tu saldo actual es de: $this->saldo <br>";
    }
}

$cuentaMartha = new Nequi("Martha Rodriguez", 100000);

$cuentaMartha->obtenerSaldo();

$cuentaMartha->depositar(20000);

$cuentaMartha->obtenerSaldo();

$cuentaMartha->retirar(50000);