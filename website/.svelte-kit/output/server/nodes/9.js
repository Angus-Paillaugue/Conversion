import * as server from '../entries/pages/forgot-password/_page.server.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/forgot-password/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/forgot-password/+page.server.js";
export const imports = ["_app/immutable/nodes/9.e7bb7223.js","_app/immutable/chunks/scheduler.e544945c.js","_app/immutable/chunks/index.721f4317.js","_app/immutable/chunks/forms.eea5795d.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.243de02e.js","_app/immutable/chunks/index.107ecb95.js"];
export const stylesheets = [];
export const fonts = [];
