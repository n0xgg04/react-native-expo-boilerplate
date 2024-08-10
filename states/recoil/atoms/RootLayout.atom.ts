import { atom } from 'recoil';

export const RootLayoutAtom = atom({
  key: 'RootLayoutAtom',
  default: {
    isLoadingSplash: true,
  },
});
