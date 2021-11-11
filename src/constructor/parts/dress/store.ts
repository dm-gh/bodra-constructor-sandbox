import { derived, get, readable, writable } from 'svelte/store';
import { materials } from '../material/store';

/* TYPES */

export type Dress = DressElement[];

export type DressElement = {
    key: string;
    title: string;
    shape: string;
    shapeOptions: string[];
    material: string,
};

export type DressModifications = {
    shape: {[key: string]: string},
    material: {[key: string]: string},
};

/* CONSTANTS */

const defaultDress: Dress = [
    {
        key: 'skirt',
        title: 'Юбка',
        shape: 'skirt',
        shapeOptions: ['skirt'],
        material: get(materials)[0].id,
    },
    {
        key: 'top',
        title: 'Верх',
        shape: 'top',
        shapeOptions: ['top'],
        material: get(materials)[0].id,
    },
    {
        key: 'collar',
        title: 'Воротник',
        shape: 'collar',
        shapeOptions: ['collar'],
        material: get(materials)[0].id,
    },
    {
        key: 'sleeves',
        title: 'Рукава',
        shape: 'sleeves',
        shapeOptions: ['sleeves', 'sleevesLong'],
        material: get(materials)[0].id,
    },
    {
        key: 'belt',
        title: 'Пояс',
        shape: 'belt',
        shapeOptions: ['belt'],
        material: get(materials)[0].id,
    }
];

const defaultDressModifications: DressModifications = {
    shape: {},
    material: {},
};

/* STORES */

export const currentDress = readable<Dress>(defaultDress);

export const currentDressModifications = writable<DressModifications>(defaultDressModifications);

export const modifiedDress = derived(
    [currentDress, currentDressModifications],
    ([$currentDress, $currentDressModifications]) =>
        $currentDress.map<DressElement>(dressElement => {
            const shapeMod = $currentDressModifications.shape[dressElement.key];
            const materialMod = $currentDressModifications.material[dressElement.key];
            return {
                ...dressElement,
                shape: shapeMod === undefined ? dressElement.shape : shapeMod,
                material: materialMod === undefined ? dressElement.material : materialMod,
            }
        })
)

export const selectedDressElementKey = writable<string | null>(defaultDress[0].key);

export const selectedDressElement = derived(
    [modifiedDress, selectedDressElementKey],
    ([$modifiedDress, $selectedDressElementKey]) => {
        if ($selectedDressElementKey === null) return null;

        return $modifiedDress.find(element => element.key === $selectedDressElementKey);
    }
);

export const visibleDressSide = writable<'front' | 'back'>('front');


