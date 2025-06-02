import { redirect } from '@sveltejs/kit';

export const load = async () => {
    throw redirect(307, '/1'); // Redirect to slug "1", not "+page.svelte"
};
