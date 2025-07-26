const cheerio = require('cheerio');

exports.handler = async () => {
  try {
    const response = await fetch('https://trends24.in/trends/kr/');
    const html = await response.text();
    const $ = cheerio.load(html);
    const trends = [];
    $('#trend-list li').slice(0, 10).each((i, el) => {
      const name = $(el).find('a').text().trim();
      const count = $(el).find('.count').text().trim() || 'N/A';
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
