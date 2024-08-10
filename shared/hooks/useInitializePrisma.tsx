import * as React from 'react';
import { initializePrisma } from '@/shared/instants/prisma';

export function useInitializePrisma() {
  const [isInitialized, setIsInitialized] = React.useState(false);
  React.useEffect(() => {
    (async () => {
      await initializePrisma();
      setIsInitialized(true);
    })();
  });
  return { isInitialized };
}
