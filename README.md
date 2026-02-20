
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Missão Peru - 100 Perguntas</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .section { display: none; }
    .active { display: block !important; }
    .btn-opcao:active { transform: scale(0.98); }
  </style>
</head>
<body class="bg-[#0A2540] text-white min-h-screen pb-24">

  <div class="bg-gradient-to-r from-[#15803D] via-[#0A2540] to-[#15803D] py-8 text-center shadow-lg">
    <img src="logo-missao-peru.png" class="mx-auto w-32 h-32 rounded-full border-4 border-[#E8B923] object-cover" alt="Logo">
    <h1 class="text-2xl font-bold text-[#E8B923] mt-2">Missão Peru - Tacna</h1>
    <p class="text-[10px] uppercase tracking-widest opacity-80">Jornada das 100 Perguntas</p>
  </div>

  <nav class="fixed bottom-0 left-0 right-0 bg-[#0A2540] border-t border-[#15803D] flex justify-around py-4 z-50 shadow-2xl">
    <button onclick="irPara('home')" class="flex flex-col items-center text-white/70">🏠<span class="text-[9px] mt-1">HOME</span></button>
    <button onclick="irPara('quiz')" class="flex flex-col items-center text-[#E8B923]">❓<span class="text-[9px] mt-1">QUIZ</span></button>
    <button onclick="irPara('doar')" class="flex flex-col items-center text-white/70">💰<span class="text-[9px] mt-1">DOAR</span></button>
  </nav>

  <main class="p-6 max-w-xl mx-auto">
    
    <div id="home" class="section active text-center">
      <div class="bg-white/5 p-8 rounded-3xl border border-white/10">
          <h2 class="text-xl font-bold text-[#E8B923] mb-4">Bem-vindo à Jornada!</h2>
          <p class="text-sm leading-relaxed mb-6 italic">"Desafie seus conhecimentos bíblicos e missionários enquanto apoia a obra em Tacna."</p>
          <button onclick="irPara('quiz')" class="w-full bg-[#E8B923] text-[#0A2540] font-black py-4 rounded-xl shadow-xl">COMEÇAR QUIZ (100 PERGUNTAS)</button>
      </div>
    </div>

    <div id="quiz" class="section">
      <div class="bg-white/5 p-6 rounded-3xl border border-white/10 relative">
        <div class="flex justify-between items-center mb-4">
            <span class="text-[10px] font-bold text-[#E8B923]">PROGRESSO: <span id="num-atual">1</span>/100</span>
            <div class="w-2/3 bg-white/10 h-1.5 rounded-full ml-2">
                <div id="progresso" class="bg-[#E8B923] h-full rounded-full transition-all" style="width: 1%"></div>
            </div>
        </div>
        <p id="pergunta" class="text-lg font-medium mb-8 min-h-[80px]">Carregando...</p>
        <div id="opcoes" class="space-y-3"></div>
        <div id="feedback" class="mt-6 text-center font-bold text-sm h-6"></div>
      </div>
    </div>

    <div id="doar" class="section text-center">
        <h2 class="text-xl font-bold text-[#E8B923] mb-6">Apoie a Missão Tacna</h2>
        <div class="bg-white/10 p-6 rounded-3xl">
            <p class="text-sm mb-2 opacity-70 uppercase">PIX (CPF)</p>
            <p class="text-2xl font-mono font-bold text-[#E8B923]">05475258856</p>
            <button onclick="copiar()" class="mt-4 bg-white text-black px-8 py-2 rounded-full font-bold text-xs uppercase">Copiar Chave</button>
            <img src="qr-pix.png" class="mx-auto w-48 h-48 mt-6 rounded-xl bg-white p-2" alt="QR Code">
        </div>
    </div>

  </main>

  <script>
    // BANCO DE DADOS COM AS 100 PERGUNTAS
    const todasPerguntas = [
        // MISSÃO E PERU (1-10)
        { q: "Qual o foco principal da Missão Tacna?", a: ["Educação e Evangelismo", "Apenas Turismo", "Comércio"], c: 0 },
        { q: "Em qual país fica a cidade de Tacna?", a: ["Bolívia", "Chile", "Peru"], c: 2 },
        { q: "Qual língua o povo Quéchua fala?", a: ["Espanhol", "Quéchua", "Aymara"], c: 1 },
        { q: "Em que ano Deus deu a visão de Tacna ao Ir. Antonio?", a: ["1997", "2010", "1993"], c: 0 },
        { q: "Tacna fica perto da fronteira com qual país?", a: ["Brasil", "Chile", "Equador"], c: 1 },
        { q: "A primeira viagem ao Peru aconteceu em qual ano?", a: ["2005", "1999", "2008"], c: 1 },
        { q: "Qual o lema bíblico da missão?", a: ["João 3:16", "Lucas 10:2", "Mateus 6:33"], c: 1 },
        { q: "O que significa 'Quéchua'?", a: ["Guerreiro", "Povo das Montanhas", "Língua da Gente"], c: 2 },
        { q: "Qual o clima predominante em Tacna?", a: ["Desértico", "Tropical", "Neve constante"], c: 0 },
        { q: "Como podemos ajudar a missão?", a: ["Só orando", "Só doando", "Orando, doando e indo"], c: 2 },
        // ANTIGO TESTAMENTO (11-40)
        { q: "Quem construiu a arca?", a: ["Moisés", "Noé", "Abraão"], c: 1 },
        { q: "Qual o primeiro livro da Bíblia?", a: ["Êxodo", "Gênesis", "Salmos"], c: 1 },
        { q: "Quem abriu o Mar Vermelho?", a: ["Josué", "Calebe", "Moisés"], c: 2 },
        { q: "Quem venceu o gigante Golias?", a: ["Saul", "Davi", "Salomão"], c: 1 },
        { q: "Quantos mandamentos foram dados a Moisés?", a: ["7", "12", "10"], c: 2 },
        { q: "Quem foi lançado na cova dos leões?", a: ["Daniel", "José", "Jonas"], c: 0 },
        { q: "Qual o homem mais forte da Bíblia?", a: ["Sansão", "Gideão", "Davi"], c: 0 },
        { q: "Quem foi engolido por um grande peixe?", a: ["Pedro", "Jonas", "Noé"], c: 1 },
        { q: "Quem era o 'Amigo de Deus'?", a: ["Abraão", "Jacó", "Isaque"], c: 0 },
        { q: "Qual mar o povo de Israel atravessou?", a: ["Mar Morto", "Mar Vermelho", "Mar da Galileia"], c: 1 },
        { q: "Quem foi o sucessor de Moisés?", a: ["Arão", "Josué", "Calebe"], c: 1 },
        { q: "Quantas pragas caíram no Egito?", a: ["7", "10", "3"], c: 1 },
        { q: "Quem era o profeta que subiu num redemoinho?", a: ["Eliseu", "Elias", "Isaías"], c: 1 },
        { q: "Qual era o nome da esposa de Abraão?", a: ["Raquel", "Sara", "Rebeca"], c: 1 },
        { q: "Quem foi vendido pelos irmãos?", a: ["Benjamim", "José", "Rubem"], c: 1 },
        { q: "Quantos livros tem o Antigo Testamento?", a: ["27", "39", "66"], c: 1 },
        { q: "Quem construiu o primeiro Templo em Jerusalém?", a: ["Davi", "Salomão", "Ezequias"], c: 1 },
        { q: "Qual profeta falou do Vale de Ossos Secos?", a: ["Ezequiel", "Jeremias", "Daniel"], c: 0 },
        { q: "Quem foi a mulher que virou estátua de sal?", a: ["Esposa de Ló", "Rute", "Ester"], c: 0 },
        { q: "Quantos anos o povo ficou no deserto?", a: ["7", "40", "100"], c: 1 },
        { q: "Quem era o rei mais sábio?", a: ["Salomão", "Davi", "Saul"], c: 0 },
        { q: "Qual livro vem depois de Gênesis?", a: ["Levítico", "Êxodo", "Números"], c: 1 },
        { q: "Quem foi o filho da promessa de Abraão?", a: ["Ismael", "Isaque", "Esaú"], c: 1 },
        { q: "Quem lutou com um anjo?", a: ["Jacó", "Isaque", "José"], c: 0 },
        { q: "Quem era a rainha que salvou o povo judeu?", a: ["Ester", "Vasti", "Jezabel"], c: 0 },
        { q: "Qual o livro de hinos da Bíblia?", a: ["Provérbios", "Salmos", "Cânticos"], c: 1 },
        { q: "Quem era o profeta que chorava?", a: ["Isaías", "Jeremias", "Miqueias"], c: 1 },
        { q: "Qual cidade as muralhas caíram com buzinas?", a: ["Jericó", "Nínive", "Babilônia"], c: 0 },
        { q: "Quem foi a bisavó de Davi?", a: ["Rute", "Noemi", "Orfa"], c: 0 },
        { q: "Qual o nome do jardim onde Adão vivia?", a: ["Getsêmani", "Éden", "Horebe"], c: 1 },
        // NOVO TESTAMENTO (41-70)
        { q: "Onde Jesus nasceu?", a: ["Nazaré", "Belém", "Jerusalém"], c: 1 },
        { q: "Quantos discípulos Jesus escolheu?", a: ["10", "12", "70"], c: 1 },
        { q: "Quem batizou Jesus?", a: ["Pedro", "João Batista", "Paulo"], c: 1 },
        { q: "Qual o primeiro milagre de Jesus?", a: ["Transformar água em vinho", "Curar cego", "Andar sobre as águas"], c: 0 },
        { q: "Quem negou Jesus três vezes?", a: ["Judas", "Pedro", "Tomé"], c: 1 },
        { q: "Quem traiu Jesus por 30 moedas?", a: ["Pedro", "Judas Iscariotes", "Mateus"], c: 1 },
        { q: "Qual discípulo era cobrador de impostos?", a: ["Mateus", "Lucas", "João"], c: 0 },
        { q: "Quem escreveu o livro de Atos?", a: ["Paulo", "Lucas", "Pedro"], c: 1 },
        { q: "Quantos livros tem o Novo Testamento?", a: ["39", "27", "21"], c: 1 },
        { q: "Qual o último livro da Bíblia?", a: ["Judas", "Apocalipse", "Hebreus"], c: 1 },
        { q: "Quem era o 'discípulo amado'?", a: ["Pedro", "Tiago", "João"], c: 2 },
        { q: "Quem ressuscitou Lázaro?", a: ["Pedro", "Jesus", "Paulo"], c: 1 },
        { q: "Qual o maior mandamento segundo Jesus?", a: ["Não matar", "Amar a Deus", "Honrar pai e mãe"], c: 1 },
        { q: "Quem caiu do cavalo no caminho de Damasco?", a: ["Saulo/Paulo", "Barnabé", "Silas"], c: 0 },
        { q: "Onde Jesus foi crucificado?", a: ["Monte das Oliveiras", "Gólgota/Calvário", "Sinai"], c: 1 },
        { q: "Qual oração Jesus ensinou?", a: ["Ave Maria", "Pai Nosso", "Credo"], c: 1 },
        { q: "Quem era o médico amado?", a: ["Marcos", "Lucas", "Timóteo"], c: 1 },
        { q: "Quem foi o primeiro mártir cristão?", a: ["Estêvão", "Tiago", "Filipe"], c: 0 },
        { q: "Em qual ilha João recebeu o Apocalipse?", a: ["Malta", "Patmos", "Creta"], c: 1 },
        { q: "Quem era o mestre da lei que visitou Jesus à noite?", a: ["Caifás", "Nicodemos", "Gamaliel"], c: 1 },
        { q: "Qual parábola fala do filho que volta?", a: ["Semeador", "Filho Pródigo", "Trigo e Joio"], c: 1 },
        { q: "Qual o menor versículo da Bíblia?", a: ["Jesus chorou", "Deus é amor", "Orai sempre"], c: 0 },
        { q: "Quem era o companheiro de Paulo nas prisões?", a: ["Silas", "Pedro", "André"], c: 0 },
        { q: "Qual cidade Paulo nasceu?", a: ["Tarso", "Roma", "Antioquia"], c: 0 },
        { q: "Quem escreveu a maioria das cartas do NT?", a: ["João", "Pedro", "Paulo"], c: 2 },
        { q: "Qual o fruto do Espírito tem 9 partes?", a: ["Gálatas 5:22", "Efésios 6", "1 Coríntios 13"], c: 0 },
        { q: "Quem era o filho na fé de Paulo?", a: ["Tito", "Timóteo", "Marcos"], c: 1 },
        { q: "Onde os discípulos foram chamados cristãos?", a: ["Antioquia", "Éfeso", "Corinto"], c: 0 },
        { q: "Quem subiu numa figueira para ver Jesus?", a: ["Zaqueu", "Mateus", "Bartimeu"], c: 0 },
        { q: "Qual apóstolo andou sobre as águas com Jesus?", a: ["João", "Tiago", "Pedro"], c: 2 },
        // MISSÕES E HISTÓRIA (71-100)
        { q: "Quem é o Pai das Missões Modernas?", a: ["William Carey", "Hudson Taylor", "David Livingstone"], c: 0 },
        { q: "O que significa 'Missionário'?", a: ["O que recebe", "Enviado", "O que canta"], c: 1 },
        { q: "Quem foi missionário na África?", a: ["David Livingstone", "Martinho Lutero", "Bento XVI"], c: 0 },
        { q: "Qual a 'Grande Comissão'?", a: ["Mateus 28:19-20", "Gênesis 1:1", "Apocalipse 22:21"], c: 0 },
        { q: "O que é a Janela 10/40?", a: ["Horário de oração", "Região menos evangelizada", "Medida de templo"], c: 1 },
        { q: "Quem disse: 'Ide por todo o mundo'?", a: ["Paulo", "Jesus", "Moisés"], c: 1 },
        { q: "Missão transcultural é...", a: ["Pregar para vizinhos", "Pregar em outra cultura/língua", "Cantar no coro"], c: 1 },
        { q: "O que é um povo não alcançado?", a: ["Gente sem igreja", "Gente sem Bíblia e Evangelho", "Gente que não gosta de religião"], c: 1 },
        { q: "Hudson Taylor foi missionário onde?", a: ["Brasil", "China", "Índia"], c: 1 },
        { q: "Qual o maior desafio missionário?", a: ["Dinheiro", "Língua e Cultura", "Transporte"], c: 1 },
        { q: "Quem financia as missões bíblicas?", a: ["Governos", "A Igreja Local", "Organizações Mundiais"], c: 1 },
        { q: "O que é 'Etnocentrismo'?", a: ["Amar todos", "Achar sua cultura superior", "Aprender grego"], c: 1 },
        { q: "Qual o livro missionário de Atos?", a: ["Capítulo 1", "Capítulo 13", "Capítulo 28"], c: 1 },
        { q: "Quem foi Adoniram Judson?", a: ["Missionário na Birmânia", "Inventor", "Rei"], c: 0 },
        { q: "O que significa 'Kerygma'?", a: ["Oração", "Proclamação/Pregação", "Comunhão"], c: 1 },
        { q: "Quem orou: 'Senhor, abre os olhos do rei'?", a: ["William Tyndale", "João Calvino", "John Wesley"], c: 0 },
        { q: "Qual país tem mais cristãos perseguidos?", a: ["Coreia do Norte", "Brasil", "EUA"], c: 0 },
        { q: "O que é o 'Campo' em missões?", a: ["Fazenda", "O Mundo", "O Templo"], c: 1 },
        { q: "A quem devemos anunciar o evangelho?", a: ["Só conhecidos", "A toda criatura", "Só a quem pede"], c: 1 },
        { q: "Quem é o dono da Seara?", a: ["O Pastor", "O Missionário", "O Senhor (Deus)"], c: 2 },
        { q: "Qual o principal combustível das missões?", a: ["Estratégia", "Dinheiro", "Oração"], c: 2 },
        { q: "O que é contextualização?", a: ["Mudar a Bíblia", "Adaptar a mensagem à cultura", "Copiar o mundo"], c: 1 },
        { q: "Qual o maior motivo para fazer missões?", a: ["Dó", "A Glória de Deus", "Fama"], c: 1 },
        { q: "Quem disse: 'O mundo é minha paróquia'?", a: ["John Wesley", "Charles Spurgeon", "Billy Graham"], c: 0 },
        { q: "Onde termina o Ide?", a: ["Em Jerusalém", "Até os confins da terra", "Na fronteira"], c: 1 },
        { q: "Qual apóstolo foi para a Índia?", a: ["Tomé", "André", "Filipe"], c: 0 },
        { q: "O que é o 'Sustento por Fé'?", a: ["Trabalhar no banco", "Depender de Deus via ofertas", "Vender bens"], c: 1 },
        { q: "Quantos povos ainda não ouviram?", a: ["Nenhum", "Milhares", "Dez"], c: 1 },
        { q: "Missão se faz com os pés dos que...", a: ["Ficam", "Vão", "Correm"], c: 1 },
        { q: "Quem é o primeiro missionário?", a: ["Deus (enviando o Filho)", "Paulo", "Pedro"], c: 0 }
    ];

    let indice = 0;
    let banco = [];

    function irPara(id) {
      document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
      document.getElementById(id).classList.add('active');
      if(id === 'quiz') iniciar();
    }

    function iniciar() {
      banco = [...todasPerguntas]; // Sem embaralhar para manter a ordem lógica (opcional)
      indice = 0;
      exibir();
    }

    function exibir() {
      const p = banco[indice];
      document.getElementById('num-atual').innerText = indice + 1;
      document.getElementById('progresso').style.width = (indice + 1) + "%";
      document.getElementById('pergunta').innerText = p.q;
      document.getElementById('feedback').innerText = "";
      
      const area = document.getElementById('opcoes');
      area.innerHTML = "";
      p.a.forEach((txt, i) => {
        const b = document.createElement('button');
        b.className = "w-full bg-white/5 border border-white/10 py-4 rounded-xl text-left px-5 hover:bg-[#15803D] transition-all btn-opcao text-sm";
        b.innerText = txt;
        b.onclick = () => checar(i);
        area.appendChild(b);
      });
    }

    function checar(esc) {
      const p = banco[indice];
      const f = document.getElementById('feedback');
      if(esc === p.c) {
        f.innerHTML = "<span class='text-green-400'>CORRETO! GLÓRIA A DEUS! 🔥</span>";
        setTimeout(() => {
          indice++;
          if(indice < banco.length) exibir();
          else finalizar();
        }, 1200);
      } else {
        f.innerHTML = "<span class='text-red-400'>TENTE NOVAMENTE, IRMÃO! 🙏</span>";
      }
    }

    function finalizar() {
        document.getElementById('quiz').innerHTML = `
            <div class="text-center p-8 bg-white/10 rounded-3xl border-2 border-[#E8B923]">
                <h2 class="text-3xl font-bold text-[#E8B923]">JORNADA CONCLUÍDA!</h2>
                <p class="mt-4">Você completou as 100 perguntas bíblicas.</p>
                <button onclick="location.reload()" class="mt-8 bg-[#E8B923] text-black px-12 py-4 rounded-full font-bold">REINICIAR</button>
            </div>
        `;
    }

    function copiar() {
      navigator.clipboard.writeText('05475258856');
      alert('Chave PIX Copiada! Deus multiplique sua oferta!');
    }
  </script>
</body>
</html>
