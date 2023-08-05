let randomize = list => () => list[Math.floor(Math.random() * list.length)],
    rando = randomize(document.querySelectorAll('svg text')),
    blink = node => () => {node.classList.toggle('blink'),setTimeout(blink(rando()), 2000)};
document.addEventListener("DOMContentLoaded", blink(rando()));