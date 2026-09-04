import { listarLivros, livroExiste, cadastrarLivro, livroDisponivel, contarLivros, obterInformacoes, calcularTaxaAtraso } from "../src/biblioteca.js";

describe("Biblioteca", () => {
    describe("Livros", () => {
        it("Deve listar todos os livros", () => {
            expect(listarLivros()).toBeTruthy();
        });

        it("Deve encontrar um livro específico", () => {
            expect(livroExiste("One Piece, Vol. 1")).toBeTruthy();
        });

        it("Deve cadastrar um livro", () => {
            expect(cadastrarLivro("Duna", "Frank Herbert")).toEqual({
                id: 6,
                titulo: "Duna",
                autor: "Frank Herbert",
                quantidade: 1,
                disponivel: true
            });
        });
    });

    describe("Disponibilidade", () => {
        it("Deve verificar se um livro está disponível", () => {
            expect(livroDisponivel("A Culpa é das Estrelas")).toBeTruthy();
        });

        it("Deve verificar se um livro é inexistente", () => {
            expect(livroDisponivel("Harry Potter e a Pedra Filosofal")).toBeFalsy();
        });

        it("Livro inexistente deve ser tratado como indisponível", () => {
            expect(livroDisponivel("Livro que não existe")).toBe(false);
        });
    });

    describe("Quantidade", () => {
        it("Deve possuir a quantidade esperada de livros", () => {
            expect(listarLivros()).toHaveLength(6);
        });

        it("Deve contar a quantidade de livros", () => {
            expect(contarLivros()).toBe(4);
        });
    });

    describe("Informações", () => {
        it("A biblioteca deve possuir um nome", () => {
            const resultado = obterInformacoes();

            expect(resultado.nome).toBeTruthy();
        });

        it("O nome deve ser o esperado", () => {
            const resultado = obterInformacoes();

            expect(resultado.nome).toBe("Biblioteca Codeverse");
        });

        it("As informações retornadas devem possuir a estrutura correta", () => {
            const resultado = obterInformacoes();

            expect(resultado).toEqual({
                nome: "Biblioteca Codeverse",
                totalLivros: contarLivros(),
                cidade: "London",
                provincia: "ON",
            });
        });
    });

    describe("Cálculo", () => {
        it("Deve devolver a taxa de atraso corretamente", () => {
            expect(calcularTaxaAtraso(5)).toBeCloseTo(7.5);
        });
    });
});
