import * as React from 'react';
import { RecoilRoot } from 'recoil';

export function withRecoilRoot<T extends React.JSX.IntrinsicAttributes>(
  Component: React.ComponentType<T>
) {
  return function RecoilWrappedComponent(props: T) {
    return (
      <RecoilRoot>
        <Component {...props} />
      </RecoilRoot>
    );
  };
}
