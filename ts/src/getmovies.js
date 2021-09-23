const request = require("request");
const cheerio = require("cheerio");
const url = "https://eiga.com/now/all/rank/"; // 映画.comランキングページ
const titles_arr = [];

request(url, (e, response, body) => {
  if (e) {
    console.error(e);
  }
  try {
    const $ = cheerio.load(body); //bodyの読み込み
    console.log(body);
    $("h2", ".list-block").each((i, elem) => {
      //'m_unit'クラス内のh3タグ内要素に対して処理実行
      //   titles_arr[i] = $(elem).text(); //配列にタイトルを挿入していく
    });
    console.log(titles_arr);
  } catch (e) {
    console.error(e);
  }
});
