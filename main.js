/* ...existing code... */
document.getElementById('openRepo').addEventListener('click', () => {
  window.open('https://www.github.com/F1dg3tXD/SoundBox', '_blank', 'noopener');
});

/* Lightweight focus-visible polyfill for keyboard users */
(function(){
  function handleFirstTab(e){
    if(e.key === 'Tab'){
      document.body.classList.add('user-is-tabbing');
      window.removeEventListener('keydown', handleFirstTab);
    }
  }
  window.addEventListener('keydown', handleFirstTab);
})();
/* ...existing code... */

