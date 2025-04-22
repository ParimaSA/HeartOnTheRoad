// MockAppRouter.tsx
'use client'

import { createContext, useContext } from 'react';
import { AppRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export function createMockRouter(router: Partial<any>) {
  return {
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    replace: jest.fn(),
    push: jest.fn(),
    prefetch: jest.fn().mockResolvedValue(undefined),
    ...router,
  };
}

export function MockAppRouterProvider({ children, routerOverrides = {} }: any) {
  const router = createMockRouter(routerOverrides);
  return (
    <AppRouterContext.Provider value={router}>
      {children}
    </AppRouterContext.Provider>
  );
}
