/**
 * This will extract the Nuxt axios module instance from Nuxt app instance and export it
 * so we can access the Nuxt axios module instance from other files (eg. Store files)
 */

import { NuxtAxiosInstance } from '@nuxtjs/axios';

// eslint-disable-next-line import/no-mutable-exports
let $axios: NuxtAxiosInstance;

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance;
}

export { $axios };
