import { StarRater } from "./star-rater.js";
import { MeuCirculo } from "./circulo.js";
import { PWButton } from "./button.js";
import { PWTitle } from "./title.js";
import { Botao } from "./app-botao.js";
import { PopUpInfo } from "./pop-up-info.js";
import { ExpandingList } from "./ExpandingList.js";

customElements.define("star-rater", StarRater);
customElements.define("meu-circulo", MeuCirculo);
customElements.define("pw-button", PWButton);
customElements.define("pw-title", PWTitle);
customElements.define("app-botao", Botao);
customElements.define("popup-info", PopUpInfo);

// Define the new element
customElements.define("expanding-list", ExpandingList, { extends: "ul" });
