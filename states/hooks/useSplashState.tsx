import { useRecoilState } from 'recoil';
import { RootLayoutAtom } from '@/states/recoil/atoms/RootLayout.atom';

export default function useSplashState() {
  return useRecoilState(RootLayoutAtom);
}
