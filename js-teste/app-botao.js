const template = document.createElement('template');
template.innerHTML = `
    <style>
        button{
            color: red;
            border-radius: 5px;
            background-image: linear-gradient(green, pink);
        }
    </style>

    <button>
        <slot name="texto"></slot>
        <span id="contador">0</span>
    </button>
`;

export class Botao extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const button = this.shadowRoot.querySelector('button');
    const contador = this.shadowRoot.getElementById('contador');

    button.addEventListener('click', () => {
      contador.innerText = parseInt(contador.textContent) + 1;
    });
  }
}
