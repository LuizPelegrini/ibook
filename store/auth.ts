import { VuexModule, Action, Module } from 'vuex-module-decorators';
import { $cookies } from '@/utils/cookies-extractor';

@Module({ name: 'auth', stateFactory: true, namespaced: true })
export default class Auth extends VuexModule {
  public get $isAuthenticated(): boolean {
    // just check the existence of the token
    const jwt = $cookies.get('@ibook:jwt');
    return !!jwt && jwt.length > 0;
  }

  @Action
  public login(_email: string, _password: string): string {
    try {
      // request server authentication
      const jwt = 'some-jwt-token';
      $cookies.set('@ibook:jwt', jwt);
      return jwt;
    } catch (error) {
      throw new Error('Unable to perform auth login request');
    }
  }

  @Action
  public logout(): string {
    try {
      const jwt = '';
      $cookies.set('@ibook:jwt', jwt);
      return jwt;
    } catch (error) {
      throw new Error('Unable to perform auth logout request');
    }
  }
}
