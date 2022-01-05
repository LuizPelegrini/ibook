import { Middleware } from '@nuxt/types';
import { authStore } from '@/store';

const authMiddleware: Middleware = ({ redirect }) => {
  if (!authStore.$isAuthenticated) {
    return redirect('/login');
  }
};

export default authMiddleware;
