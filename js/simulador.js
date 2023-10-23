//Variables
let saldo = 5000;
let transacciones = [];

//funciones
        function rDeposito() {
            const cantidad = parseInt(prompt('Quiero Depositar:'));
            if (!isNaN(cantidad) && cantidad > 0) {
                saldo += cantidad;
                transacciones[transacciones.length] = `Depósito: +$${cantidad}`;
                aHistorial();
                alert(`Depósito exitoso.`);
            } else {
                alert('Por favor, ingrese una cantidad válida.');
            }
        }

        function rRetiro() {
            const cantidad = parseInt(prompt('Quiero Retirar:'));
//condicionales            
            if (!isNaN(cantidad) && cantidad > 0 && cantidad <= saldo) {
                saldo -= cantidad;
                transacciones[transacciones.length] = `Retiro: -$${cantidad}`;
                aHistorial();
                alert(`Su retiro ha sido exitoso.`);
            } else if (cantidad > saldo) {
                alert('No tiene fondos necesarios.');
            } else {
                alert('Por favor, ingrese una cantidad válida.');
            }
        }

        function vSaldo() {
            alert(`Su saldo actual es: $${saldo}`);
        }

        function lHistorial() {
            transacciones = [];
            aHistorial();
        }

        function aHistorial() {
            const hElement = document.getElementById('historial');
            hElement.innerHTML = ''; 
//bucles
            for (let i = 0; i < transacciones.length; i = i + 1) {
                const li = document.createElement('li');
                li.textContent = transacciones[i];
                hElement.appendChild(li);
            }
        }
