export function trackEvent(eventName: string, data: Record<string, any> = {}) {
	if (typeof window !== 'undefined' && typeof (window as any).umami !== 'undefined') {
		(window as any).umami.track(eventName, data);
	}
}
