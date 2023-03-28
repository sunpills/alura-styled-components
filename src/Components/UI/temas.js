import { fundoClaro, textoFundoClaro, conteudoFundoClaro, fundoEscuro, textoFundoEscuro, conteudoFundoEscuro } from './variables';

export const temaClaro = {
    body: fundoClaro,
    inside: conteudoFundoClaro,
    text: textoFundoClaro,
    filter: "",
  };
  
  export const temaEscuro = {
    body: fundoEscuro,
    inside: conteudoFundoEscuro,
    text: textoFundoEscuro,
    filter: "invert(100%)",
  };