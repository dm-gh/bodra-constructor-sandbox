import { derived, Readable, writable } from 'svelte/store';
import { dresses } from './dresses';
import type { DressFromRuntime } from './types';
import { shapes } from './shapes';
import { materials } from './materials';
import { DressModification, DressSide } from './types';

export const visibleDressSide = writable<DressSide>(DressSide.FRONT);

export const selectedDressIndex = writable(0);

const selectedDressFromDb = derived(
    [dresses, selectedDressIndex],
    async ([$dresses, $selectedDressIndex]) =>
        (await $dresses)[$selectedDressIndex]
)

export const selectedDressModifications = writable<{[partId: string]: DressModification}>({});

export const selectedDressModified: Readable<Promise<DressFromRuntime>> = derived(
    [selectedDressFromDb, selectedDressModifications, shapes, materials],
    async ([$selectedDressFromDb, $modifications, $shapes, $materials]) => {
        const dress = await $selectedDressFromDb;
        const shapesArr = await $shapes;
        const materialsArr = await $materials;

        return {
            ...dress,
            parts: dress.parts
                .map((part) => {
                    const shapeOptionId = $modifications[part.id]?.shape ?? part.options[0];
                    const materialOptionId = $modifications[part.id]?.material ?? 'white_color';
                    return {
                        ...part,
                        shape: shapesArr.find(sh => sh.id === shapeOptionId),
                        material: materialsArr.find(mat => mat.id === materialOptionId),
                    };
                })
        }
    }
)

export const selectedDressPartId = writable<string | null>(null);

export const selectedDressPart = derived(
    [selectedDressModified, selectedDressPartId],
    async ([$dress, $selectedDressPartId]) => {
        if ($selectedDressPartId === null) return null;

        const dressValue = await $dress;

        return dressValue.parts.find(part => part.id === $selectedDressPartId);
    }
);


