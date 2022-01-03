import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { Book } from '@/models';
import { $axios } from '@/utils/nuxt-instance';

@Module({ name: 'books', stateFactory: true, namespaced: true })
export default class Books extends VuexModule {
  private books = [] as Book[];
  private book = {} as Book;

  public get $all(): Book[] {
    return this.books;
  }

  public get $single(): Book {
    return this.book;
  }

  @Mutation
  private SET_ALL(books: Book[]): void {
    this.books = books;
  }

  @Mutation
  private SET_SINGLE(book: Book): void {
    this.book = book;
  }

  @Action({ commit: 'SET_ALL' })
  public async index(): Promise<Book[]> {
    const books = await $axios.$get('/books');
    return books;
  }

  @Action({ commit: 'SET_SINGLE' })
  public async show(id: Book['id']): Promise<Book | undefined> {
    try {
      const book = (await $axios.$get(`/books/${id}`)) as Book;
      return book;
    } catch (err) {
      throw new Error('Book not found');
    }
  }
}
