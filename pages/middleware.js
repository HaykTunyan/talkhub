// Middleware Files.

// import createMiddleware from 'next-intl/middleware';

import createMiddleware from  'next-intl';

const middleware = createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'am', 'ru'],

  // Used when no locale matches
  defaultLocale: 'en'
});

module.exports = middleware;

module.exports.config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(am|en|ru)/:path*']
};




