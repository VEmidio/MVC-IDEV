const uController = require("../Controllers/userController");
describe("Salvar usuario", () => {
   

    test("Validar dados: Informe um email válido", () => {
        const resultado = uController.salvar(
            "John Doe", "email.com", "2873s23"
        );
        expect(resultado).toBe("Informe um email válido");
    });

    test("Validar dados: Informe uma senha", () => {
        const resultado = uController.salvar(
            "John Doe", "email@gmail.com", ""
        );
        expect(resultado).toBe("Informe uma senha válida");
    });

    test("Validar dados: Informe um nome", () => {
        const resultado = uController.salvar(
            "", "email@gmail.com", "1293719HKJH"
        );
        expect(resultado).toBe("Informe um nome");
    });

    
});