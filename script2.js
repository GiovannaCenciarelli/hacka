document.addEventListener('DOMContentLoaded', () => {
    const logoImg = document.querySelector('.logo-box img');
    const formFields = document.querySelectorAll('.input');
    const registerBtn = document.querySelector('.btn');
  
    // 1) Fade-in sequencial dos campos
    formFields.forEach((fld, i) => {
      fld.style.opacity = 0;
      fld.style.transform = 'translateX(-20px)';
      setTimeout(() => {
        fld.style.transition = 'all 0.5s ease';
        fld.style.opacity = 1;
        fld.style.transform = 'translateX(0)';
      }, 300 + i * 150);
    });
  
    // 2) Botão “pulsante” suave
    setInterval(() => {
      registerBtn.animate([
        { boxShadow: '0 4px 6px rgba(0,53,56,0.2)' },
        { boxShadow: '0 8px 12px rgba(0,53,56,0.4)' },
        { boxShadow: '0 4px 6px rgba(0,53,56,0.2)' }
      ], {
        duration: 3000,
        iterations: Infinity
      });
    }, 0);
  
    // 3) Tilt da logo conforme mouse
    document.querySelector('.logo-box').addEventListener('mousemove', e => {
      const { width, height, left, top } = logoImg.getBoundingClientRect();
      const x = e.clientX - (left + width / 2);
      const y = e.clientY - (top + height / 2);
      const dampen = 20; // quanto menor, mais tilt
      logoImg.style.transform = `scale(1.1) rotateX(${y/dampen}deg) rotateY(${x/dampen}deg)`;
    });
    document.querySelector('.logo-box').addEventListener('mouseleave', () => {
      logoImg.style.transform = 'scale(1) rotate(0)';
    });
  });
  