document.addEventListener('DOMContentLoaded', function() {
  // Elementos que vamos animar
  const logo = document.querySelector('.logo img');
  const loginBox = document.querySelector('.login-box');
  const textoElement = document.querySelector('.texto-lateral p');
  
  // Texto para o efeito de digitação
  const textoDigitacao = "Sinta a sensação de transformar cada\num dos seus objetivos em conquistas.";
  
  // 1. Configuração inicial - Esconde elementos
  logo.style.opacity = '0';
  loginBox.style.opacity = '0';
  textoElement.textContent = '';
  
  // 2. Animação da logo aparecendo e indo para o lado
  function animarLogo() {
    // Centraliza a logo inicialmente
    logo.style.position = 'fixed';
    logo.style.top = '50%';
    logo.style.left = '50%';
    logo.style.transform = 'translate(-50%, -50%)';
    logo.style.width = '350px';
    logo.style.opacity = '1';
    logo.style.transition = 'all 1s ease';
    
    // Depois de 1s, move a logo para a posição final
    setTimeout(() => {
      logo.style.position = 'static';
      logo.style.top = 'auto';
      logo.style.left = 'auto';
      logo.style.transform = 'none';
      logo.style.width = '';
      
      // Quando a logo chegar no lugar, mostra o formulário
      setTimeout(mostrarFormulario, 1500);
    }, 1500);
  }
  
  // 3. Mostra o formulário com fade-in
  function mostrarFormulario() {
    loginBox.style.transition = 'opacity 1s ease';
    loginBox.style.opacity = '1';
    
    // Inicia o efeito de digitação quando o formulário estiver visível
    setTimeout(iniciarDigitacao, 500);
  }
  
  // 4. Efeito de digitação completamente reformulado
  function iniciarDigitacao() {
    // Prepara o elemento para a animação
    textoElement.style.visibility = 'hidden';
    textoElement.textContent = textoDigitacao;
    
    // Força o cálculo do layout
    void textoElement.offsetHeight;
    
    // Armazena o texto completo e limpa o elemento
    const textoCompleto = textoElement.textContent;
    textoElement.textContent = '';
    textoElement.style.visibility = 'visible';
    
    // Adiciona a classe de animação
    textoElement.classList.add('texto-digitando');
    
    let i = 0;
    const speed = 50; // velocidade da digitação em ms
    
    function typeWriter() {
      if (i < textoCompleto.length) {
        // Trata quebras de linha corretamente
        if (textoCompleto.charAt(i) === '\n') {
          textoElement.innerHTML += '<br>';
        } else {
          textoElement.innerHTML += textoCompleto.charAt(i);
        }
        
        // Mantém o scroll visível
        textoElement.scrollTop = textoElement.scrollHeight;
        
        i++;
        setTimeout(typeWriter, speed);
      } else {
        // Remove o cursor piscante ao finalizar
        textoElement.classList.remove('texto-digitando');
      }
    }
    
    typeWriter();
  }
  
  // Inicia a sequência de animações após um pequeno delay
  setTimeout(animarLogo, 300);
});