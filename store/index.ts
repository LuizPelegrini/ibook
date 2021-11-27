/*
 * In order to access the stores without initialising it in each component,
 * we can use an initializer plugin to initialize all modules
 */

import { Store } from 'vuex';
import { initialiseStores } from '@/utils/store-accessor';

const initializer = (store: Store<any>) => initialiseStores(store);

export const plugins = [initializer];
export * from '@/utils/store-accessor';
