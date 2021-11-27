/**
 * This will ask the nuxt-instance to initialize the Nuxt axios module and make it available
 * to importing in the Vuex Store modules
 */

import { Plugin } from '@nuxt/types';
import { initializeAxios } from '@/utils/nuxt-instance';

const accessor: Plugin = ({ $axios }) => {
  initializeAxios($axios);
};

// exporting a default function will execute the function right when Nuxt starts
export default accessor;
