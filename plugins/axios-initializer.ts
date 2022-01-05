/**
 * This will ask the axios-extractor to extraxt axios module from Nuxt context and make it available
 * for importing in the Vuex Store modules
 */

import { Plugin } from '@nuxt/types';
import { initializeAxios } from '@/utils/axios-extractor';

const accessor: Plugin = ({ $axios }) => {
  initializeAxios($axios);
};

// exporting a default function will execute the function right when Nuxt starts
export default accessor;
