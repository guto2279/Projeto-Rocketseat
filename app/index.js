const { select, input, checkbox } = require('@inquirer/prompts')

let metas = []

const cadastrarMeta = async () => {
    const meta = await input ({message: "Digite a meta: "})
    
    if (meta.length == 0){
        console.log("A meta não pode ser vazia")
        return
    }

    metas.push({ value:meta, checked: false})
}

const listarMetas = async () => {
    const respostas = await checkbox({
        message: "Use as setas para mudar de meta, o espaço para marcar e desmarcar e o enter para finalizar está etapa",
        choices: [...metas],
        instructions: false,
    })

    if(espostas.length == 0){
        console.log("Nenhuma meta selecionada!")
        return
    } 

    metas.forEach((m) => {
        m.checked = false
    })

    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

        meta.checked = true

    } )

    console.log('Meta(s)  marcadas Concluida(s)')
}

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
        
        switch(opcao){
            case "cadastrar":
                console.log("Vamos cadastrar")
                await cadastrarMeta()
                console.log(metas)
                break
            case "listar":
                console.log("Vamos Listar")
                await listarMetas()
                break
            case "sair":
                return
        }
    }
}

start()

