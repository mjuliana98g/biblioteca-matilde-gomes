import { carregarLivros } from "./API.js";;

async function iniciarAplicacao() {
    const livros = await carregarLivros();
    console.log(livros);
}

iniciarAplicacao();