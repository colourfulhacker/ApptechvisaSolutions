import { useEffect, useState } from 'react';
import { isVercel } from '@/lib/vercel-utils';

export default function HealthCheck() {
  const [isHealthy, setIsHealthy] = useState<boolean | null>(null);
  const [isVercelEnv, setIsVercelEnv] = useState(false);

  useEffect(() => {
    // Check if running on Vercel
    setIsVercelEnv(isVercel);
    
    // Simple health check - if this component renders, the app is working
    setIsHealthy(true);
    
    // Additional health checks for Vercel
    if (isVercel) {
      // Check if critical resources are loaded
      const checkResources = () => {
        const hasRoot = document.getElementById('root') !== null;
        const hasStyles = document.querySelector('link[rel="stylesheet"]') !== null;
        const hasScripts = document.querySelector('script[type="module"]') !== null;
        
        return hasRoot && hasStyles && hasScripts;
      };
      
      // Run check after a short delay to ensure everything is loaded
      setTimeout(() => {
        const resourcesOk = checkResources();
        setIsHealthy(resourcesOk);
      }, 1000);
    }
  }, []);

  if (isHealthy === null) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div 
        className={`w-3 h-3 rounded-full ${isHealthy ? 'bg-green-500' : 'bg-red-500'}`} 
        title={`${isHealthy ? 'App is healthy' : 'App has issues'}${isVercelEnv ? ' (Vercel)' : ''}`} 
      />
    </div>
  );
}
