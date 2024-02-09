import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Danilo", 7022488355);
const cliente2 = new Cliente("Ana", 19032002777);
const cliente3 = new Cliente("Cássio", 20122024777)

const conta1 = new ContaCorrente(81728, cliente1);
const conta2 = new ContaCorrente(102, cliente2);
const conta3 = new ContaCorrente(2012, cliente3);

conta1.depositar(1910);
conta1.depositar(-20);

const valorSacado = conta1.sacar(200);
//console.log(valorSacado);

let valor = 210;
conta1.transferir(valor, conta2);

console.log(cliente1);
console.log(ContaCorrente.numeroDeContas)