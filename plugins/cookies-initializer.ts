/**
 * This will ask cookies-extractor to extract the cookies instance from the Nuxt context,
 * so we can access the cookies module inside the Store
 */

import { Plugin } from '@nuxt/types';
import { initializeCookiesUniversal } from '@/utils/cookies-extractor';

const accessor: Plugin = context => {
  // get cookies instance from nuxt context
  const cookiesInstance = context.$cookies;

  // ask the extractor to keep a reference to this instance
  // this way we can access the reference inside the Vuex modules
  initializeCookiesUniversal(cookiesInstance);
};

export default accessor;
