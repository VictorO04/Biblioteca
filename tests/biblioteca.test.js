import { listarLivros, livroExiste, cadastrarLivro } from "../src/biblioteca.js";

describe("Biblioteca", () => {
    describe("Livros", () => {
        it("Deve listar todos os livros", () => {
            expect(listarLivros()).toBeTruthy();
        })

        it("Deve possuir a quantidade esperada de livros", () => {
            expect(listarLivros()).toHaveLength(5);
        })

        it("Deve encontrar um livro específico", () => {
            expect(livroExiste("One Piece, Vol. 1")).toBeTruthy();
        });

        it("Deve retornar que o livro é inexistente", () => {
            expect(livroExiste("Sherlock Holmes")).toBeFalsy();
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
    })
});
