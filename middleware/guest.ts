import { Middleware } from '@nuxt/types';
import { authStore } from '@/store';

const guestMiddleware: Middleware = ({ redirect }) => {
  authStore.init();

  if (authStore.$isAuthenticated) {
    return redirect('/dashboard');
  }
};

export default guestMiddleware;
