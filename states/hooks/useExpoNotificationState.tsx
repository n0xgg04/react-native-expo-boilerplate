import { useRecoilState } from 'recoil';
import { ExpoNotificationAtom } from '@/states/recoil/atoms/ExpoNotification.atom';

export default function useExpoNotificationState() {
  return useRecoilState(ExpoNotificationAtom);
}
