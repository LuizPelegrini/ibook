import { NuxtCookies } from 'cookie-universal-nuxt';

// eslint-disable-next-line import/no-mutable-exports
let $cookies: NuxtCookies;

export function initializeCookiesUniversal(cookies: NuxtCookies) {
  $cookies = cookies;
}

export { $cookies };
