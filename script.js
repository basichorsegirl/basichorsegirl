




new Sign().print(document.body)
// window.addEventListener("load", () => {
//  new Sign().print(document.body);
// });

const audio = document.getElementById('backgroundAudio');
const playPauseButton = document.getElementById('playPauseButton');

playPauseButton.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
    }
});



class Sign {
 constructor(attr = {}) {
  attr = {
   ...attr,
   ...{
    href: "https://linkedin.com/in/mateusgeneroso",
    innerText: "@mtsgeneroso",
    target: "_blank",
    style: {
     fontFamily: 'monospace',
     fontSize: '18px',
     fontWeight: 'bold',
     textDecoration: 'none',
     color: 'rgba(255,255,255,.75)',
     boxSizing: 'border-box',
     display: 'block',
     position: 'fixed',
     padding: '16px',
     bottom: '16px',
     left: '50%',
     transform: 'translateX(-50%)'
    }
   }
  };
  this.$el = this.create();
  this.$el = this.applyAttributes(this.$el, attr);
  return this;
 }

 create() {
  return document.createElement("a");
 }

 applyAttributes($a, attr) {
  $a.href = attr.href;
  $a.innerText = attr.innerText;
  $a.target = attr.target;
  Object.assign($a.style, attr.style)
  return $a;
 }

 print($container) {
  $container.appendChild(this.$el);
 }
}
