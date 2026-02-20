<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Missão Peru - Tacna</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .section { display: none; }
    .active { display: block !important; }
    .nav-btn { cursor: pointer; }
  </style>
</head>
<body class="bg-[#0A2540] text-white min-h-screen pb-24">

  <div class="bg-gradient-to-r from-[#15803D] via-[#0A2540] to-[#15803D] py-8 text-center">
    <img src="logo-missao-peru.png" class="mx-auto w-40 h-40 rounded-full border-4 border-[#E8B923] object-cover bg-slate-800" alt="Logo">
    <h1 class="text-3xl font-bold text-[#E8B923] mt-3">Missão Peru</h1>
    <p class="text-sm">Tacna • Um Chamado de Coragem</p>
  </div>

  <div class="fixed bottom-0 left-0 right-0 bg-[#0A2540] border-t border-[#15803D] flex justify-around py-4 z-50">
    <button onclick="irPara('home')" class="nav-btn flex flex-col items-center text-[#E8B923]">🏠<span class="text-[10px]">INÍCIO</span></button>
    <button onclick="irPara('doar')" class="nav-btn flex flex-col items-center">💰<span class="text-[10px]">DOAR</span></button>
    <button onclick="irPara('oracao')" class="nav-btn flex flex-col items-center">🙏<span class="text-[10px]">ORAÇÃO</span></button>
    <button onclick="irPara('quiz')" class="nav-btn flex flex-col items-center">❓<span class="text-[10px]">QUIZ</span></button>
  </div>

  <main class="p-6">
    <div id="home" class="section active">
      <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
        <h2 class="text-[#E8B923] font-bold mb-2">Nossa História</h2>
        <p>Desde 1993 Deus escreve nossa história. Em 1997 a visão: Tacna, Peru!</p>
      </div>
      <button onclick="irPara('doar')" class="mt-6 w-full bg-[#E8B923] text-[#0A2540] font-bold py-4 rounded-xl">QUERO APOIAR</button>
    </div>

    <div id="doar" class="section text-center">
      <h2 class="text-[#E8B923] font-bold mb-4">Oferta Missionária</h2>
      <div class="bg-white/5 p-6 rounded-2xl">
        <p class="text-sm">Chave PIX (CPF):</p>
        <p class="text-xl font-bold text-[#E8B923]">05475258856</p>
        <button onclick="copiar()" class="mt-4 bg-white text-black px-6 py-2 rounded-full text-sm font-bold">COPIAR CHAVE</button>
        <div class="mt-6">
          <img src="qr-pix.png" class="mx-auto w-48 h-48 bg-white p-2 rounded-lg" alt="QR Code">
        </div>
      </div>
    </div>

    <div id="oracao" class="section">
      <h2 class="text-[#E8B923] font-bold mb-4">Intercessão</h2>
      <p class="bg-white/5 p-3 rounded mb-2">🛡️ Proteção na fronteira</p>
      <p class="bg-white/5 p-3 rounded mb-2">🏠 Aluguel da base</p>
    </div>

    <div id="quiz" class="section">
      <div class="bg-white/10 p-6 rounded-2xl text-center">
        <p class="font-bold mb-4">Qual o país da missão?</p>
        <button onclick="alert('Correto! 🔥')" class="w-full bg-white/10 py-3 mb-2 rounded">Peru</button>
        <button onclick="alert('Tente de novo 🙏')" class="w-full bg-white/10 py-3 rounded">Brasil</button>
      </div>
    </div>
  </main>

  <script>
    function irPara(id) {
      document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
      document.getElementById(id).classList.add('active');
      window.scrollTo(0,0);
    }
    function copiar() {
      navigator.clipboard.writeText('05475258856');
      alert('Chave Copiada!');
    }
  </script>
</body>
</html>
