export const initShootingStar = () => {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    document.body.appendChild(shootingStar);
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          shootingStar.style.opacity = '1';
          shootingStar.style.visibility = 'visible';
          shootingStar.style.animation = 'shoot 1s cubic-bezier(0.4, 0, 0.2, 1)';
          
          // Reset animation after completion
          setTimeout(() => {
            shootingStar.style.opacity = '0';
            shootingStar.style.visibility = 'hidden';
            shootingStar.style.animation = 'none';
          }, 1000);
        }
      });
    }, { 
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% visible
    });
  
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }
  
    return () => {
      observer.disconnect();
      document.body.removeChild(shootingStar);
    };
  };