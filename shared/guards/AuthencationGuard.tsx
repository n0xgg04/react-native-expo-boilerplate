import { selector, useRecoilValue } from 'recoil';
import { AuthencationState } from '@/states/recoil/atoms/Authencation.atom';

const authencationGuardState = selector({
  key: 'AuthencationGuards',
  get: ({ get }) => {
    const authencationState = get(AuthencationState);
    return {
      isLoggedIn: authencationState.isLoggedIn,
      data: authencationState.userData,
    };
  },
});

export default function useAuthencationGuard() {
  return useRecoilValue(authencationGuardState);
}
