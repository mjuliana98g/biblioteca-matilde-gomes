export async function carregarLivros() {
    const resposta = await fetch("data/livros.json");
    const livros = await resposta.json();
    return livros;
}