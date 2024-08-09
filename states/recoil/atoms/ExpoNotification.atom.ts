import { atom } from 'recoil';

export const ExpoNotificationAtom = atom({
  default: {
    expoToken: '',
  },
  key: 'ExpoNotification',
});
