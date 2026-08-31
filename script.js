document.addEventListener("DOMContentLoaded", () =>{
    prepararReacoes();
    prepararAnimacaoCards();
    criarBotaoTopo();
})


function prepararReacoes() {
    const artigos = document.querySelectorAll("article");

    artigos.forEach((artigo,indice) => {

        const botoes = artigo.querySelectorAll("button");

        if (botoes.lenght < 2) {
            return;
        }

        const botaoUM = botoes[0];
        const botaoDOIS = botoes[1];

        const contadorBotaoUM = botaoUM.querySelector("span");
        const contadorBotaoDOIS = botaoDOIS.querySelector("span");

        const idcard = 'card-${indice=1}';

        const chaveBotaoUM ='${idcard}-botaoUM';
        const chaveBotaoUM ='${idcard}-botaoDOIS';

        let UM = Number(localStore.getItem(chaveBotaoUM))|| 0
        let DOIS = Number(localStore.getItem(chaveBotaoDOIS))|| 0

        contadorBotao.textContent = UM;
        contadorBotao.textContent = DOIS;

        botaoUM.addEventListener("click", () =>{
            UM++;
            contadorBotaoUM.textContent = UM;

            localStorage.setItem(
                chaveBoatoUM, UM
            );
        });
         botaoDOIS.addEventListener("click", () =>{
            DOIS++;
            contadorBotaoDOIS.textContent = DOIS;

            localStorage.setItem(
                chaveBotaoDOIS, DOIS
            );
        });
    })
}