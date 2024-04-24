import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionario/Gerente.js"
import {Diretor} from "./Funcionario/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";

const diretor = new Diretor("Mulinari", 77000, 12345678900)
diretor.cadastrarSenha("123456")
const gerente = new Gerente("Wanderlei", 53000, 98765432100)

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const cliente = new Cliente("Danilo", 12365400987, "1910");

console.log(gerenteEstaLogado);
console.log(diretorEstaLogado);

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "1910");
console.log(clienteEstaLogado);
