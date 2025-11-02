import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.PZhH_rWe.js","_app/immutable/chunks/Cm9PB-7n.js","_app/immutable/chunks/2wf1Aaj1.js","_app/immutable/chunks/TbyxGmvr.js","_app/immutable/chunks/CY9W8SNi.js","_app/immutable/chunks/4ZUZ_POA.js","_app/immutable/chunks/Pna8C8of.js"];
export const stylesheets = ["_app/immutable/assets/0.pLPOcUMK.css"];
export const fonts = [];
