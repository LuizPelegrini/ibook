import { VuexModule, Action, Mutation, Module } from 'vuex-module-decorators';

@Module({ name: 'auth', stateFactory: true, namespaced: true })
export default class Auth extends VuexModule {
  private jwt: string = '';

  public get $isAuthenticated(): boolean {
    // just check the existence of the token
    return this.jwt.length > 0;
  }

  @Mutation
  private SET_JWT_TOKEN(jwt: string): void {
    this.jwt = jwt;
  }

  @Action({ commit: 'SET_JWT_TOKEN' })
  public login(_email: string, _password: string): string {
    try {
      // request server authentication
      const jwt = 'some-jwt-token';
      return jwt;
    } catch (error) {
      throw new Error('Unable to perform auth login request');
    }
  }

  @Action({ commit: 'SET_JWT_TOKEN' })
  public logout(): string {
    try {
      const jwt = '';
      return jwt;
    } catch (error) {
      throw new Error('Unable to perform auth logout request');
    }
  }
}
