import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export const accordionContextKey = Symbol('accordionContextKey');

export type AccordionContextType = {
    activeKeys: Writable<string[]>
}

export function createNewAccordionContext(): AccordionContextType {
    return {
        activeKeys: writable([]),
    }
}
