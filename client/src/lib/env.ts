// Environment configuration for Vercel deployment
export const config = {
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
  baseUrl: import.meta.env.VITE_BASE_URL || '/',
  apiUrl: import.meta.env.VITE_API_URL || '',
};

// Safe environment access
export const getEnvVar = (key: string, defaultValue: string = ''): string => {
  try {
    return import.meta.env[key] || defaultValue;
  } catch {
    return defaultValue;
  }
};
