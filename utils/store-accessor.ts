/**
 * To use Vuex modules in Nuxt + Typescript, we can construct an accessor that
 * will initialize each store in a "type-safe" manner by using getModule()
 */

import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import Books from '@/store/books';

// eslint-disable-next-line import/no-mutable-exports
let booksStore: Books;

function initialiseStores(store: Store<any>): void {
  booksStore = getModule(Books, store);
}

export { initialiseStores, booksStore };
