
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/dashboard-01" | "/dashboard" | "/login-01" | "/login-02" | "/login-03" | "/login-04" | "/login-05" | "/login" | "/otp-01" | "/otp-02" | "/otp-03" | "/otp-04" | "/otp-05" | "/otp" | "/rtl-demo" | "/sidebar-01" | "/sidebar-02" | "/sidebar-03" | "/sidebar-04" | "/sidebar-05" | "/sidebar-06" | "/sidebar-07" | "/sidebar-08" | "/sidebar-09" | "/sidebar-10" | "/sidebar-11" | "/sidebar-12" | "/sidebar-13" | "/sidebar-14" | "/sidebar-15" | "/sidebar-16" | "/sidebar" | "/signup-01" | "/signup-02" | "/signup-03" | "/signup-04" | "/signup-05" | "/signup";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/dashboard-01": Record<string, never>;
			"/dashboard": Record<string, never>;
			"/login-01": Record<string, never>;
			"/login-02": Record<string, never>;
			"/login-03": Record<string, never>;
			"/login-04": Record<string, never>;
			"/login-05": Record<string, never>;
			"/login": Record<string, never>;
			"/otp-01": Record<string, never>;
			"/otp-02": Record<string, never>;
			"/otp-03": Record<string, never>;
			"/otp-04": Record<string, never>;
			"/otp-05": Record<string, never>;
			"/otp": Record<string, never>;
			"/rtl-demo": Record<string, never>;
			"/sidebar-01": Record<string, never>;
			"/sidebar-02": Record<string, never>;
			"/sidebar-03": Record<string, never>;
			"/sidebar-04": Record<string, never>;
			"/sidebar-05": Record<string, never>;
			"/sidebar-06": Record<string, never>;
			"/sidebar-07": Record<string, never>;
			"/sidebar-08": Record<string, never>;
			"/sidebar-09": Record<string, never>;
			"/sidebar-10": Record<string, never>;
			"/sidebar-11": Record<string, never>;
			"/sidebar-12": Record<string, never>;
			"/sidebar-13": Record<string, never>;
			"/sidebar-14": Record<string, never>;
			"/sidebar-15": Record<string, never>;
			"/sidebar-16": Record<string, never>;
			"/sidebar": Record<string, never>;
			"/signup-01": Record<string, never>;
			"/signup-02": Record<string, never>;
			"/signup-03": Record<string, never>;
			"/signup-04": Record<string, never>;
			"/signup-05": Record<string, never>;
			"/signup": Record<string, never>
		};
		Pathname(): "/" | "/dashboard-01" | "/dashboard-01/" | "/dashboard" | "/dashboard/" | "/login-01" | "/login-01/" | "/login-02" | "/login-02/" | "/login-03" | "/login-03/" | "/login-04" | "/login-04/" | "/login-05" | "/login-05/" | "/login" | "/login/" | "/otp-01" | "/otp-01/" | "/otp-02" | "/otp-02/" | "/otp-03" | "/otp-03/" | "/otp-04" | "/otp-04/" | "/otp-05" | "/otp-05/" | "/otp" | "/otp/" | "/rtl-demo" | "/rtl-demo/" | "/sidebar-01" | "/sidebar-01/" | "/sidebar-02" | "/sidebar-02/" | "/sidebar-03" | "/sidebar-03/" | "/sidebar-04" | "/sidebar-04/" | "/sidebar-05" | "/sidebar-05/" | "/sidebar-06" | "/sidebar-06/" | "/sidebar-07" | "/sidebar-07/" | "/sidebar-08" | "/sidebar-08/" | "/sidebar-09" | "/sidebar-09/" | "/sidebar-10" | "/sidebar-10/" | "/sidebar-11" | "/sidebar-11/" | "/sidebar-12" | "/sidebar-12/" | "/sidebar-13" | "/sidebar-13/" | "/sidebar-14" | "/sidebar-14/" | "/sidebar-15" | "/sidebar-15/" | "/sidebar-16" | "/sidebar-16/" | "/sidebar" | "/sidebar/" | "/signup-01" | "/signup-01/" | "/signup-02" | "/signup-02/" | "/signup-03" | "/signup-03/" | "/signup-04" | "/signup-04/" | "/signup-05" | "/signup-05/" | "/signup" | "/signup/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/avatars/shadcn.jpg" | "/placeholder.svg" | "/robots.txt" | string & {};
	}
}