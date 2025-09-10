// Vercel-specific utilities and error handling
export const isVercel = typeof window !== 'undefined' && 
  (window.location.hostname.includes('vercel.app') || 
   window.location.hostname.includes('vercel.com'));

export const logError = (error: Error, context?: string) => {
  if (typeof window !== 'undefined' && window.console) {
    console.error(`[${context || 'App'}] Error:`, error);
    
    // In production, you might want to send errors to a logging service
    if (isVercel && process.env.NODE_ENV === 'production') {
      // Add your error logging service here if needed
      console.warn('Error logged for Vercel production environment');
    }
  }
};

export const safeJsonParse = <T>(json: string, fallback: T): T => {
  try {
    return JSON.parse(json);
  } catch {
    return fallback;
  }
};

export const safeLocalStorage = {
  getItem: (key: string): string | null => {
    try {
      return typeof window !== 'undefined' ? localStorage.getItem(key) : null;
    } catch {
      return null;
    }
  },
  setItem: (key: string, value: string): void => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, value);
      }
    } catch {
      // Silently fail
    }
  }
};
