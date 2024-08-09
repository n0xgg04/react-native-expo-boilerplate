import * as React from 'react';
import { default as LottieViewOrigin } from 'lottie-react-native';

type Props = {};

const LottieView = React.forwardRef<
  LottieViewOrigin,
  Props & React.ComponentProps<typeof LottieViewOrigin>
>(function (props, ref) {
  return <LottieViewOrigin ref={ref} {...props} />;
});

export { LottieView };
