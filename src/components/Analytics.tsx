import { useEffect } from 'react';

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

class Analytics {
  private static instance: Analytics;
  private isEnabled: boolean = false;

  static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  init(trackingId?: string) {
    if (trackingId && typeof window !== 'undefined') {
      // Initialize Google Analytics or other analytics service
      this.isEnabled = true;
      console.log('Analytics initialized with ID:', trackingId);
    }
  }

  track(event: AnalyticsEvent) {
    if (!this.isEnabled) return;
    
    // Track event (replace with your analytics service)
    console.log('Analytics event:', event);
    
    // Example for Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value
      });
    }
  }

  pageView(path: string) {
    if (!this.isEnabled) return;
    
    console.log('Page view:', path);
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_TRACKING_ID', {
        page_path: path
      });
    }
  }
}

export const analytics = Analytics.getInstance();

export function AnalyticsProvider({ children, trackingId }: { children: React.ReactNode; trackingId?: string }) {
  useEffect(() => {
    analytics.init(trackingId);
    analytics.pageView(window.location.pathname);
  }, [trackingId]);

  return <>{children}</>;
}

// Hook for tracking events
export function useAnalytics() {
  const trackEvent = (event: AnalyticsEvent) => {
    analytics.track(event);
  };

  const trackClick = (element: string, section?: string) => {
    trackEvent({
      action: 'click',
      category: 'engagement',
      label: `${section ? section + '_' : ''}${element}`
    });
  };

  const trackDownload = (fileName: string) => {
    trackEvent({
      action: 'download',
      category: 'file',
      label: fileName
    });
  };

  return { trackEvent, trackClick, trackDownload };
}