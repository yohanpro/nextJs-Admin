const prod = process.env.NODE_ENV === 'production';

module.exports = {
  PORT: 8080,
  'process.env.BASE_URL': prod
    ? 'https://dcadscac.com'
    : 'http://localhost:8080',
  'process.env.JWT_SECRET': 'abcde',
};
