// hooks.js
import { useContext } from 'react';
import { MobXProviderContext } from 'mobx-react';

export const useStore = () => {
  return useContext(MobXProviderContext);
};
