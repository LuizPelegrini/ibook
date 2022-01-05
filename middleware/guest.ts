import { Middleware } from '@nuxt/types';

const guestMiddleware: Middleware = () => {
  console.log('guest');
};

export default guestMiddleware;
