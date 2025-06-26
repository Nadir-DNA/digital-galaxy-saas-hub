
/// <reference types="vite/client" />

declare global {
  function gtag(command: string, targetId: string | Date, config?: Record<string, any>): void;
  interface Window {
    gtag: typeof gtag;
    dataLayer: any[];
  }
}

export {};
