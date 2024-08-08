export class PopUpInfo extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('span');
    wrapper.setAttribute('class', 'wrapper');

    const icon = wrapper.appendChild(document.createElement('span'));
    icon.setAttribute('class', 'icon');
    icon.setAttribute('tabindex', 0);

    const img = icon.appendChild(document.createElement('img'));
    img.src = this.hasAttribute('img')
      ? this.getAttribute('img')
      : 'img/default.png';
    img.alt = 'informações';

    const info = wrapper.appendChild(document.createElement('span'));
    info.setAttribute('class', 'info');
    info.textContent = this.getAttribute('data-text');

    const style = document.createElement('style');
    style.textContent = `
      .wrapper {
        position: relative;
      }

      .info {
        font-size: 0.8rem;
        width: 200px;
        display: inline-block;
        border: 1px solid black;
        padding: 10px;
        background: white;
        border-radius: 10px;
        display: none;
        transition: 0.6s all;
        position: absolute;
        bottom: 20px;
        left: 10px;
        z-index: 3;
      }

      img {
        width: 1.2rem;
      }

      .icon:hover + .info, .icon:focus + .info {
        display: block;
      }
    `;

    shadow.append(style, wrapper);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}
