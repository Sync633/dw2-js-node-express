// ===== Tarefa 01 ===== //
const listaClientes = [
    {
        nome: "Miguel",
        endereco: "Avenida Jatoba, 808 - Jacupiranga - SP",
        cpf: 46245327830
    },
    {
        nome: "Maria",
        endereco: "Rua Bergamota, 123 - Cajati - SP",
        cpf: 12345678900
    },
    {
        nome: "Marcos",
        endereco: "Rua das Andorinhas, 2424 - Xique-Xique - BA",
        cpf: 54678912399
    }
];

// ===== Tarefa 02 ===== //
listaClientes.forEach(cliente => {
    document.write(`
        Nome: ${cliente.nome}<br>
        Endereço: ${cliente.endereco}<br>
        CPF: ${cliente.cpf}<br><br>
        `)
});

// ===== Tarefa 03 ===== //
document.write("<hr>")
listaClientes.push({
    nome: "Isabelly",
    endereco: "Avenida das Flores, 633 - Curitiba - PR",
    cpf: 14785236987
});

listaClientes.forEach(cliente => {
    document.write(`
        Nome: ${cliente.nome}<br>
        Endereço: ${cliente.endereco}<br>
        CPF: ${cliente.cpf}<br><br>
        `)
});

// ===== Tarefa 04 ===== //
document.write("<hr>")
listaClientes.unshift({
    nome: "Bruno",
    endereco: "Rua Sobreiro, 120 - Jacupiranga - SP",
    cpf: 35715985264
});

listaClientes.forEach(cliente => {
    document.write(`
        Nome: ${cliente.nome}<br>
        Endereço: ${cliente.endereco}<br>
        CPF: ${cliente.cpf}<br><br>
        `)
});