exports.handler = async () => {
  try {
    const trends = [
      { name: '#TestTrend1', count: '100K tweets' },
      { name: '#TestTrend2', count: '90K tweets' },
      { name: '#TestTrend3', count: '80K tweets' }
    ];
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

