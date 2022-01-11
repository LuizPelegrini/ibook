import { VuexModule, Action, Module, Mutation } from 'vuex-module-decorators';
import { $cookies } from '@/utils/cookies-extractor';

@Module({ name: 'auth', stateFactory: true, namespaced: true })
export default class Auth extends VuexModule {
  private jwt: string = '';

  public get $isAuthenticated(): boolean {
    // just check the existence of the token
    return this.jwt.length > 0;
  }

  @Mutation
  private SET_JWT_TOKEN(jwt: string) {
    this.jwt = jwt;
  }

  @Action
  public init(): void {
    // initialize the value of the token
    const jwt = $cookies.get('@ibook:jwt');
    this.context.commit('SET_JWT_TOKEN', jwt);
  }

  @Action
  public login(_email: string, _password: string): void {
    try {
      // request server authentication
      const jwt = 'some-jwt-token';
      this.context.commit('SET_JWT_TOKEN', jwt);
      $cookies.set('@ibook:jwt', jwt);
    } catch (error) {
      throw new Error('Unable to perform auth login request');
    }
  }

  @Action
  public logout(): void {
    try {
      const jwt = '';
      this.context.commit('SET_JWT_TOKEN', jwt);
      $cookies.set('@ibook:jwt', jwt);
    } catch (error) {
      throw new Error('Unable to perform auth logout request');
    }
  }
}
