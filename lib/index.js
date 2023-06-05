const rp = require('request-promise');
const cheerio = require('cheerio');

function artigo(data){
  // exemplo data: 2023326
// const data = '2023326'
const url = 'https://wol.jw.org/pt/wol/d/r5/lp-t/' + data;

rp(url)
  .then(html => {
    const articles = [];
    const $ = cheerio.load(html);
    // Use seletores CSS para extrair os dados desejados
    $('.scalableui').each((index, element) => {
      const title = $(element).find('p').text().trim();
      // const title = $(element).find('li.entry-title').text().trim();
      // const date = $(element).find('.date').text().trim();
      // const excerpt = $(element).find('.entry-content p').first().text().trim();
      // console.log(element);
      // articles.push({
      //   title: title
      // });
      articles.push({
        title: title,
      });
    });

    console.log(articles);
  })
  .catch(err => {
    console.error('Ocorreu um erro ao fazer a solicitação:', err);
  });

}
exports.artigo = artigo
