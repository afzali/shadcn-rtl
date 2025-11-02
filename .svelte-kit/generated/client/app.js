export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28'),
	() => import('./nodes/29'),
	() => import('./nodes/30'),
	() => import('./nodes/31'),
	() => import('./nodes/32'),
	() => import('./nodes/33'),
	() => import('./nodes/34'),
	() => import('./nodes/35'),
	() => import('./nodes/36'),
	() => import('./nodes/37'),
	() => import('./nodes/38'),
	() => import('./nodes/39'),
	() => import('./nodes/40')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/dashboard-01": [4],
		"/dashboard": [3],
		"/login-01": [6],
		"/login-02": [7],
		"/login-03": [8],
		"/login-04": [9],
		"/login-05": [10],
		"/login": [5],
		"/otp-01": [12],
		"/otp-02": [13],
		"/otp-03": [14],
		"/otp-04": [15],
		"/otp-05": [16],
		"/otp": [11],
		"/rtl-demo": [17],
		"/sidebar-01": [19],
		"/sidebar-02": [20],
		"/sidebar-03": [21],
		"/sidebar-04": [22],
		"/sidebar-05": [23],
		"/sidebar-06": [24],
		"/sidebar-07": [25],
		"/sidebar-08": [26],
		"/sidebar-09": [27],
		"/sidebar-10": [28],
		"/sidebar-11": [29],
		"/sidebar-12": [30],
		"/sidebar-13": [31],
		"/sidebar-14": [32],
		"/sidebar-15": [33],
		"/sidebar-16": [34],
		"/sidebar": [18],
		"/signup-01": [36],
		"/signup-02": [37],
		"/signup-03": [38],
		"/signup-04": [39],
		"/signup-05": [40],
		"/signup": [35]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';