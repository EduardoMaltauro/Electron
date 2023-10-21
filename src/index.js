const { app, BrowserWindow } = require("electron")

function criarJanela(){
    const janela = new BrowserWindow({
        height: 600,
        with: 800
    })

    janela.loadFile("./public/index.html")
}

app.whenReady()
    .then( function() {
        // Aplicação iniciada com sucesso!
        criarJanela()
    })
    .catch(function(erro){
        // Aplicação falhou ao ser iniciada!
        console.log(erro.message)
    })