export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["avatars/shadcn.jpg","placeholder.svg","robots.txt"]),
	mimeTypes: {".jpg":"image/jpeg",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.Da7MPAxK.js",app:"_app/immutable/entry/app.BL1Seupm.js",imports:["_app/immutable/entry/start.Da7MPAxK.js","_app/immutable/chunks/E5W3QlHu.js","_app/immutable/chunks/6lCu8Rqb.js","_app/immutable/chunks/2wf1Aaj1.js","_app/immutable/chunks/B7pVWCQ1.js","_app/immutable/chunks/TbyxGmvr.js","_app/immutable/entry/app.BL1Seupm.js","_app/immutable/chunks/2wf1Aaj1.js","_app/immutable/chunks/B7pVWCQ1.js","_app/immutable/chunks/TbyxGmvr.js","_app/immutable/chunks/Cm9PB-7n.js","_app/immutable/chunks/6lCu8Rqb.js","_app/immutable/chunks/B8dcjSjv.js","_app/immutable/chunks/Pna8C8of.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/login","/signup","/otp","/sidebar","/dashboard","/rtl-demo","/login-01","/login-02","/login-03","/login-04","/login-05","/signup-01","/signup-02","/signup-03","/signup-04","/signup-05","/otp-01","/otp-02","/otp-03","/otp-04","/otp-05","/sidebar-01","/sidebar-02","/sidebar-03","/sidebar-04","/sidebar-05","/sidebar-06","/sidebar-07","/sidebar-08","/sidebar-09","/sidebar-10","/sidebar-11","/sidebar-12","/sidebar-13","/sidebar-14","/sidebar-15","/sidebar-16","/dashboard-01"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
