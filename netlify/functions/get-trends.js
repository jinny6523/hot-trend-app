exports.handler = async (event, context) => {
  try {
    const response = await fetch('https://api.x.com/1.1/trends/place.json?id=23424868', {
      headers: { Authorization: `Bearer ${process.env.X_API_BEARER_TOKEN}` }
    });
    const data = await response.json();
    const trends = data[0].trends.slice(0, 10).map(trend => ({
      name: trend.name,
      count: trend.tweet_volume ? `${trend.tweet_volume} tweets` : 'N/A'
    }));
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
