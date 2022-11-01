import type { SortBy } from '$lib/types/SortBy';
import { writable } from 'svelte/store';

const sortBy = writable<SortBy>('newest');

export { sortBy };
