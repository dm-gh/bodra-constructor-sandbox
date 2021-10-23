import { writable } from 'svelte/store';

export const selectedElementOnDisplay = writable<string | null>(null);
