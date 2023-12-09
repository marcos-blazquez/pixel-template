const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'es-CL',
    locales: ['es-CL'],
    localeDetection: false,
    localePath: path.resolve('./public/locales'),
  },
};
