/* eslint-disable import/no-mutable-exports */

/**
 * To use Vuex modules in Nuxt + Typescript, we can construct an accessor that
 * will initialize each store in a "type-safe" manner by using getModule()
 */

import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import Books from '@/store/books';
import Auth from '@/store/auth';

let booksStore: Books;
let authStore: Auth;

function initialiseStores(store: Store<any>): void {
  booksStore = getModule(Books, store);
  authStore = getModule(Auth, store);
}

export { initialiseStores, booksStore, authStore };
