class cozinha {
    constructor(nomeCozinha, horaAbertura, horaFechamento, pratoPrincipal) {
        this.nomeCozinha = nomeCozinha
        this.horaAbertura = horaAbertura
        this.horaFechamento = horaFechamento
        this.pratoPrincipal = pratoPrincipal
    }
    anunciarNomeCozinha() {
        console.log(`Nome: ${this.nomeCozinha}`)
    }
    anunciarHoraAbertura() {
        console.log(`Horário de abertura: ${this.horaAbertura}`)
    }
    anunciarHoraFechamento() {
        console.log(`Horário de fechamento: ${this.horaFechamento}`)
    }
    anunciarPratoPrincipal() {
        console.log(`Prato Principal: ${this.pratoPrincipal}`)
    }
}

class ingrediente {
    constructor(nomeIngrediente, DataValidade) {
        this.nomeIngrediente = nomeIngrediente
        this.DataValidade = DataValidade
    }
    anunciarNomeIngrediente() {
        console.log(`Nome: ${this.nomeIngrediente}`)
    }
    anunciarDataValidade() {
        console.log(`Data de validade: ${this.DataValidade}`)
    }
}

{
    const cozinha1 = new cozinha('Cozinha mineira', 14, 20, 'Feijoada')
    cozinha1.anunciarNomeCozinha()
    cozinha1.anunciarHoraAbertura()
    cozinha1.anunciarHoraFechamento()
    cozinha1.anunciarPratoPrincipal()

    console.log("\nLista de ingredientes:")

    const ingrediente1 = new ingrediente('Feijão', '30/04/2022')
    ingrediente1.anunciarNomeIngrediente()
    ingrediente1.anunciarDataValidade()
    
    const ingrediente2 = new ingrediente('Farinha', '05/05/2022')
    ingrediente2.anunciarNomeIngrediente()
    ingrediente2.anunciarDataValidade()
    
    const ingrediente3 = new ingrediente('Arroz', '27/04/2022')
    ingrediente3.anunciarNomeIngrediente()
    ingrediente3.anunciarDataValidade()
    
    const ingrediente4 = new ingrediente('Carne de Porco', '15/03/2022')
    ingrediente4.anunciarNomeIngrediente()
    ingrediente4.anunciarDataValidade()

    const ingrediente5 = new ingrediente('Linguiça', '03/04/2022')
    ingrediente5.anunciarNomeIngrediente()
    ingrediente5.anunciarDataValidade()
}

console.log("\n")

{
    const cozinha1 = new cozinha('Cozinha chinesa', 10, 23, 'Yakissoba')
    cozinha1.anunciarNomeCozinha()
    cozinha1.anunciarHoraAbertura()
    cozinha1.anunciarHoraFechamento()
    cozinha1.anunciarPratoPrincipal()

    console.log("\nLista de ingredientes:")

    const ingrediente1 = new ingrediente('Champignon,', '27/02/2022')
    ingrediente1.anunciarNomeIngrediente()
    ingrediente1.anunciarDataValidade()
    
    const ingrediente2 = new ingrediente('Brócolis,', '25/01/2022')
    ingrediente2.anunciarNomeIngrediente()
    ingrediente2.anunciarDataValidade()
    
    const ingrediente3 = new ingrediente('Macarrão', '25/04/2022')
    ingrediente3.anunciarNomeIngrediente()
    ingrediente3.anunciarDataValidade()
    
    const ingrediente4 = new ingrediente('Carne', '17/03/2022')
    ingrediente4.anunciarNomeIngrediente()
    ingrediente4.anunciarDataValidade()
}