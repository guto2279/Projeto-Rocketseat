# criando variável e constante, e mostrando mensagem no console
let mensagem = "Váriavel"
const msg = "Constante"
console.log(mensagem);
console.log(msg);

# criando arrays 

let array1 = ["guto", "Wesley"]

console.log(array1[0] + ", " + array1[1])

# criando objetos

let meta = {
    value: 'Ler um livro todo mês',
    checked: false
} //chaves significa um objeto

console.log(meta.value)


# Criando função arrow-function

const criarMeta = () => {

}

//function criarMeta(){}  outro estilo de função



# Estrutura de repetição while 

    let count = 0 
    while(count < 10){
        console.log(count)
        count ++

    }


# condicional while 

let opcao = "sair"
        switch(opcao){
            case "cadastrar":
                console.log('Vamos cadastrar')
                break
            case "listar":
                console.log('Vamos Listar')
                break
            case "sair":
                return
        }

# modulos em nodejs 

npm install require //importa as dependências require

const { select } = require('@inquire/prompts') // importando select dos objetos

## Programação Assincrona e promessas
const start = async() => { 
    while(true){
        const opcao = await select({
            message: "Menu >",
            choices: [
            {
                name: "Cadastrar metas",
                value: "cadastrar"
            },
            {
                name: "Listar metas",
                value: "listar"
            },
            {
                name: "Sair",
                value: "sair"
            }
        ]

        })
        
        