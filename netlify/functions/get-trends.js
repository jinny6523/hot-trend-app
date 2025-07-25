const cheerio = require('cheerio');

exports.handler = async () => {
  try {
    const response = await fetch('https://getdaytrends.com/korea/');
    const html = await response.text();
    const $ = cheerio.load(html);
    const trends = [];
    $('ol.chart li').slice(0, 10).each((i, el) => {
      const name = $(el).find('a').text().trim();
      const count = $(el).find('small').text().trim();
      trends.push({name, count});
    });
    return {
      statusCode: 200,
      body: JSON.stringify(trends)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.toString() })
    };
  }
};
