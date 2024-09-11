function start(){
    let count = 0 
    while(true){
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
    }
}

start()