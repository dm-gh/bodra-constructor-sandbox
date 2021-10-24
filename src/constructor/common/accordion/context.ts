import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export const accordionContextKey = Symbol('accordionContextKey');

export type AccordionContextType = {
    activeKey: Writable<string | null>
}

export function createNewAccordionContext(): AccordionContextType {
    return {
        activeKey: writable(null),
    }
}
