const love = document.querySelector('.love');

love.addEventListener('click', (Math) =>{
  love.style.backgroundColor = `hsl(${Math.random(KeyframeEffect) * 360}, 90%, 60%)`;
  love.style.setProperty('--love-color', love.style.backgroundColor);
});