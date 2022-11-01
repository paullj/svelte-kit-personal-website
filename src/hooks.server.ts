import { persistIndex } from '$lib/search/persistIndex';
import type { Handle } from '@sveltejs/kit';

persistIndex();

export const handle: Handle = async ({ event, resolve }) => resolve(event);
