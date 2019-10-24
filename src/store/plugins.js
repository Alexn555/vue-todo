import { STORAGE_KEY } from './mutations';
import createLogger from './plugins/logger';

const localStoragePlugin = store => {
  store.subscribe((mutation, { tasks }) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  });
};

export default process.env.NODE_ENV !== 'production'
  ? [createLogger(), localStoragePlugin]
  : [localStoragePlugin];
