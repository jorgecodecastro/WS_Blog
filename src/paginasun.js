/*
Objetivos:
titulo
linkimj
datapublicacao
TextDecoder
*/
const axios = require('axios');
const cheerio = require('cheerio');

//const urlson = 'https://www.gov.br/pt-br/noticias/educacao-e-pesquisa/2023/06/inscricoes-para-o-enem-2023-tem-inicio-nesta-segunda-feira-5-6';
const urlson = 'https://www.gov.br/pt-br/noticias/comunicacao/2023/06/computadores-para-inclusao-ja-recebeu-257-toneladas-de-eletronicos-em-2023'

axios.get(urlson)
.then(resp=>{
    const dadoshtml = resp.data;
    const $ = cheerio.load(dadoshtml);
    const titulo = $('h1').text();
    const linkimg = $('img').attr('src');
    const datapublicacao = $('spam[class="value"]').text();
    const texto = $('div[property="rnews:articleBody"]').text();

    const dados = {titulo,linkimg,datapublicacao,texto}

    console.log(dados);
})