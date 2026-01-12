export {};

declare global {
  interface Window {
      dataLayer?: any[];
      updateStatusBar: (mode?: EMode, commandLine?: string, fileInfo?: string, position?: string) => void;
      performSearch: (query: string) => void;
    }
  }