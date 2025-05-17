document.addEventListener('DOMContentLoaded', () => {
  
  gsap.to("#yinYang", {
    rotate: 360,
    transformOrigin: "50% 50%",
    repeat: -1,
    duration: 8,
    ease: "linear"
  });
  
  let freq = 0.03, dir = 1;
  function animateWater() {
    freq += dir * 0.0005;
    if (freq > 0.045 || freq < 0.025) dir *= -1;
    const turb = document.getElementById('turb');
    if (turb) turb.setAttribute('baseFrequency', `${freq} 0.04`);
    requestAnimationFrame(animateWater);
  }
  animateWater();
});