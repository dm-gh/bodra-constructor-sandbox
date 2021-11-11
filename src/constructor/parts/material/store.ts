import { derived, readable } from 'svelte/store';

export type Material = {
    id: string;
    imageUrl: string;
    title: string;
    cost: number;
}

export const materials = readable<Material[]>([
    {
        id: 'pattern0',
        imageUrl: '/images/white_color.png',
        title: 'Default',
        cost: 1000
    },
    {
        id: 'pattern1',
        imageUrl: '/images/pattern1.png',
        title: 'Pattern 1',
        cost: 1000
    },
    {
        id: 'pattern2',
        imageUrl: '/images/pattern3.jpg',
        title: 'Pattern 2',
        cost: 1000
    },
    {
        id: 'pattern3',
        imageUrl: '/images/pattern4.jpg',
        title: 'Pattern 3',
        cost: 1000
    },
]);

export const materialsNormalized = derived(
    [materials],
    ([$materials]): {[id: string]: Material} =>
        $materials.reduce(
            (acc, mat) => ({
                ...acc,
                [mat.id]: mat
            }),
            {},
        ),
)
