// TODO: upward triangles to represent fire
// TODO floating twitter icon with same triangles and displacementFilter

const WIDTH = 400;

const svg = document.getElementById('svg');

const createTriangles = (node, colors) => {
  colors.forEach((color, i) => {
    create('path')
      .attr('fill', color)
      .attr(
        'd',
        `M${i * 50},${0}h${WIDTH - i * 100}l${-WIDTH / 2 + i * 50},${550 -
          i * 50}z`
      )
      .appendTo(node);
  });
};

createTriangles(document.querySelector('#reflection g'), [
  '#030090',
  '#2525b7',
  '#6ca0ff',
  '#fff'
]);

const render = () => {
  const t = Date.now();
  x.setAttribute('baseFrequency', sin(t / 4000) * 0.005 + 0.02);

  requestAnimationFrame(render);
};

render();
