var xmlns = 'http://www.w3.org/2000/svg';

const create = type => $(document.createElementNS(xmlns, type));

const $ = node => {
  const api = {node};

  const method = (name, fn) => {
    api[name] = (...args) => {
      fn(...args, api);
      return api;
    };
  };

  method('method', method);

  return api
    .method('appendTo', parent => {
      parent.appendChild(node);
    })
    .method('attr', (name, value) => {
      node.setAttribute(name, value);
    });
};
