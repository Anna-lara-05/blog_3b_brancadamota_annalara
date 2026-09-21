
document.addEventListener("DOMContentLoaded", () => {
    prepararReacoes();
    prepararAnimacaoCards();
    criarBotaoTopo();
    prepararModoEscuro();   // nova
    document.addEventListener("DOMContentLoaded", () => {
    prepararReacoes();
    prepararAnimacaoCards();
    criarBotaoTopo();
    criarBotaoTema();
    criarBarraProgresso();   // nova
});

// Barra no topo que mostra quanto da página já foi lido
function criarBarraProgresso() {
    const barra = document.createElement("div");
    barra.id = "barra-progresso";
    document.body.appendChild(barra);

    function atualizar() {
        const rolado = window.scrollY;                                  // quanto já rolou
        const total = document.documentElement.scrollHeight - window.innerHeight; // quanto dá para rolar
        const porcentagem = total > 0 ? (rolado / total) * 100 : 0;
        barra.style.width = porcentagem + "%";
    }

    window.addEventListener("scroll", atualizar);
    atualizar();
}
});

function prepararReacoes() {
    const artigos = document.querySelectorAll("article");

    artigos.forEach((a<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog o 3ºB Exatas</title>
    <link rel="stylesheet" href="style.css">
 </head>
  <body>
 <header>
        <h1>BLOG COLÉGIO ESTADUAL BRANCA DA MOTA FERNANDES </h1>
  
          <P>Aqui será mostrado os projetos realizados pelos alunos dentro do ambiente escolar </P>
      </header>

    <main>
   <article>
    <img src="img/1000229138.png" alt="informaçao sobre minha imagem " srcset="">
    <div>
        <h2>festival de dança </h2>
             <p class="artigo-autor">Organização: Anna Lara</p>
              <p>O Festival de Dança do Colégio Estadual Branca da Mota Fernandes é, sem dúvida, o momento mais aguardado por todos nós, alunos, durante todo o ano letivo. Desde os primeiros meses de aula, o evento já se torna o principal assunto nos corredores e intervalos existe uma expectativa real e contagiante que une estudantes de todas as séries.
A preparação começa muito antes do grande dia passamos meses discutindo ideias, escolhendo as músicas, definindo os temas e criando as coreografias quando os ensaios no contraturno e aos sábados começam, a rotina da escola se transforma. É um período de muito esforço e dedicação, onde passamos horas repetindo os passos para que tudo saia perfeito apesar do cansaço, esse processo é maravilhoso porque nos aproxima e fortalece a amizade entre as turmas. Inclusive, muitos colegas que são extremamente tímidos na sala de aula encontram na dança uma forma de se expressar e surpreendem a todos com seu talento.
Quando a semana do festival finalmente chega, a atmosfera no colégio fica elétrica o frio na barriga nos bastidores é inevitável enquanto ajustamos os figurinos e relembramos os movimentos pela última vez.
No entanto, no momento em que entramos no palco e ouvimos os aplausos dos nossos colegas, professores, toda a ansiedade se transforma em orgulho ver o resultado de tantos meses de dedicação sendo valorizado é uma sensação inexplicável o festival é muito mais do que uma apresentação escolar; é a oportunidade de mostrarmos nossa identidade e criarmos memórias que levaremos para o resto de nossas vidas. </p>
              <p class="artigo-fonte">rede social escolar  <a href=""></a> </p>
              <button>❤️‍🔥​<span>0</span></button>
               <button>🤔​<span>0</span></button>
    </div>
    </article>
    <article>
    <img src="img/e7raB-confira-a-programacao-de-festas-juninas-neste-final-de-semana-em-maringa.webp" alt="informaçao sobre minha imagem " srcset="">
    <div>
        <h2>festa junina </h2>
             <p class="artigo-autor">Organização: Anna Lara</p>
              <p>A Festa Junina do Colégio Estadual Branca da Mota Fernandes é o evento que encerra o primeiro semestre letivo em Maringá, marcando o início das férias de meio de ano. Todos os anos, alunos e professores se reúnem para celebrar as tradições populares brasileiras em um clima de alegria e confraternização, com direito a quadrilha, comidas típicas, bandeirinhas coloridas, brincadeiras e muita música caipira espalhada pelo pátio da escola. A preparação envolve semanas de dedicação, com turmas se organizando para os ensaios de dança e para a decoração do ambiente, criando um verdadeiro clima de festa dentro do colégio. Mais do que uma comemoração, a Festa Junina é uma oportunidade de valorizar e manter viva a cultura do nosso país, fortalecendo os laços da comunidade escolar e passando adiante, de geração em geração, costumes e tradições que fazem parte da identidade brasileira É um momento de encerrar o semestre com chave de ouro, celebrando o esforço de todos ao longo dos meses e dando as boas-vindas ao merecido descanso das férias. </p>
              <p class="artigo-fonte">rede social escolar  <a href=""></a> </p>
              <button>❤️‍🔥​<span>0</span></button>
               <button>🤔​<span>0</span></button>
    </div>
    </article>
     </article>
    <article>
    <img src="img/1000229284.png" alt="informaçao sobre minha imagem " srcset="">
    <div>
        <h2>decoração das salas </h2>
             <p class="artigo-autor">Organização: Anna Lara</p>
              <p>Este ano os alunos foram além e todas as turmas não só para sentirmos o clima da copa nas salas mas também para representarmos nosso país e para juntar a sala,já que são momentos aonde todos se juntam para trabalhar em equipe e logo os resultados foram simplesmente impecáveis uma sala mais bonita que as outra e ninguém ficou de fora , e tudo isso com opoio da coordenação.  </p>
              <p class="artigo-fonte">rede social escolar  <a href=""></a> </p>
              <button>❤️‍🔥​<span>0</span></button>
               <button>🤔​<span>0</span></button>
    </div>
    </article>
      <article>
    <img src="img/Gemini_Generated_Image_hc7n06hc7n06hc7n.png" alt="informaçao sobre minha imagem " srcset="">
    <div>
        <h2>Interclasse </h2>
             <p class="artigo-autor">Organização: Anna Lara</p>
              <p>O Interclasse do Colégio Estadual Branca da Mota Fernandes é o evento que fecha o ano letivo em grande estilo, ocorrendo no período que antecede as férias de final de ano. O clima de competição saudável toma conta da escola, com turmas tão animadas que chegam a criar camisetas personalizadas para representar sua sala nas disputas. São várias modalidades esportivas, como vôlei, futebol e basquete, que colocam à prova o espírito de equipe e a habilidade dos alunos. Mais do que uma competição, o Interclasse é um momento de integração e diversão, onde os estudantes torcem uns pelos outros, criam memórias e encerram o ano com muita energia e union antes do merecido descanso.</p>
              <p class="artigo-fonte">rede social escolar  <a href=""></a> </p>
              <button>❤️‍🔥​<span>0</span></button>
               <button>🤔​<span>0</span></button>
    </div>
    </article>
 <article>
    <img src="img/cesta_de_cafe_da_manha_presente_camponesa_caminho_da_fazenda_1095_1_a8d540570bc324ac1fb7d5fa73aa8d03.webp" alt="informaçao sobre minha imagem " srcset="">
    <div>
        <h2>Pedido das madrinhas e Padrinhos  </h2>
             <p class="artigo-autor">Organização: Anna Lara</p>
              <p>Todos os anos os terceiros anos organizam os pedidos para suas madrinhas e padrinhos e cada ano é um momento especial não só as turmas por demonstrarem carinho pelos seus professores mas como também mas aos professores que enfrentam dificuldades na profissão e então rcebem este gesto de carinho que mostra para eles que seus esforços não são em vão e que suas profissões que constroem o mundo.  </p>
              <p class="artigo-fonte">rede social escolar  <a href=""></a> </p>
              <button>❤️‍🔥​<span>0</span></button>
               <button>🤔​<span>0</span></button>
    </div>
    </article>
    <article>
    <img src="img/1000231665.jpg" alt="informaçao sobre minha imagem " srcset="">
    <div>
        <h2>Colaboradoras da escola </h2>
             <p class="artigo-autor">Organização: Anna Lara</p>
              <p>Nossas queridas tias que ficam espalhadas pela escola cuidando para que os alunos não matem aula e para evitar brigas mas na práticas são as funcionárias que todos os aulos amam pois elas não sóestão aqui para cuidar da gente mas também sãonossas amigas,psicólogas,conselheiras e muitas outras coisas e óbvio nunca esquecendo do trabalho delas mas também deixando o ambiente escolar mais acolhedor, temos tias aqui que estão a anos no colégio o que mostra o quanto gostam do que fazem. </p>
              <p class="artigo-fonte">rede social escolar  <a href=""></a> </p>
              <button>❤️‍🔥​<span>0</span></button>
               <button>🤔​<span>0</span></button>
    </div>
    </article>
          </main>

</body>
<script src="script.js"></script>
</html>





rtigo,indice) => {

        const botoes = artigo.querySelectorAll("button");

        if (botoes.langht < 2) {
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
document.addEventListener("DOMContentLoaded", () => {
    prepararReacoes();
    prepararAnimacaoCards();
    criarBotaoTopo();
});

// Contadores dos botões de reação (salvos no localStorage)
function prepararReacoes() {
    const artigos = document.querySelectorAll("article");

    artigos.forEach((artigo, indice) => {
        const botoes = artigo.querySelectorAll("button");
        if (botoes.length < 2) return;

        const botaoUM = botoes[0];
        const botaoDOIS = botoes[1];
        const contadorUM = botaoUM.querySelector("span");
        const contadorDOIS = botaoDOIS.querySelector("span");

        const idcard = `card-${indice + 1}`;
        const chaveUM = `${idcard}-botaoUM`;
        const chaveDOIS = `${idcard}-botaoDOIS`;

        let UM = Number(localStorage.getItem(chaveUM)) || 0;
        let DOIS = Number(localStorage.getItem(chaveDOIS)) || 0;

        contadorUM.textContent = UM;
        contadorDOIS.textContent = DOIS;

        botaoUM.addEventListener("click", () => {
            UM++;
            contadorUM.textContent = UM;
            localStorage.setItem(chaveUM, UM);
        });

        botaoDOIS.addEventListener("click", () => {
            DOIS++;
            contadorDOIS.textContent = DOIS;
            localStorage.setItem(chaveDOIS, DOIS);
        });
    });
}

// Cards aparecem quando entram na tela
function prepararAnimacaoCards() {
    const cards = document.querySelectorAll("article");

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.remove("escondido");
                observador.unobserve(entrada.target); // anima só uma vez
            }
        });
    }, { threshold: 0.15 });

    cards.forEach((card) => {
        card.classList.add("escondido");
        observador.observe(card);
    });
}

// Botão flutuante para voltar ao topo
function criarBotaoTopo() {
    const botao = document.createElement("button");
    botao.id = "botao-topo";
    botao.textContent = "↑";
    botao.setAttribute("aria-label", "Voltar ao topo");
    document.body.appendChild(botao);

    window.addEventListener("scroll", () => {
        botao.classList.toggle("visivel", window.scrollY > 300);
    });

    botao.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
// Botão que alterna entre modo claro e escuro
function prepararModoEscuro() {
    const botao = document.createElement("button");
    botao.id = "botao-tema";
    document.body.appendChild(botao);

    function aplicarTema(escuro) {
        document.body.classList.toggle("escuro", escuro);
        botao.textContent = escuro ? "☀️" : "🌙";
        botao.setAttribute("aria-label", escuro ? "Ativar modo claro" : "Ativar modo escuro");
    }

    // lê a escolha salva (se nunca escolheu, começa no claro)
    let escuro = localStorage.getItem("tema") === "escuro";
    aplicarTema(escuro);

    botao.addEventListener("click", () => {
        escuro = !escuro;
        aplicarTema(escuro);
        localStorage.setItem("tema", escuro ? "escuro" : "claro");
    });
}