import { atom } from 'recoil';

export const AuthencationState = atom<AuthencationState>({
  key: 'Authencation',
  default: {
    isLoggedIn: true,
    userData: {
      username: '',
      email: '',
    },
  },
});
