import { writable } from 'svelte/store';

export type Store = DressElement[];

export type DressElement = {
    key: string;
    title: string;
    shape: string;
    shapeOptions: string[];
    color: string;
    colorOptions: string[];
    pattern: string;
    patternOptions: string[];
}

export const defaultDress: Store = [
    {
        key: 'collar',
        title: 'Воротник',
        shape: 'collar1',
        shapeOptions: ['collar1'],
        color: '#ffffff',
        colorOptions: ['#ff0000', '#ffffff'],
        pattern: 'none',
        patternOptions: ['none'],
    },
    {
        key: 'skirt',
        title: 'Юбка',
        shape: 'skirt1',
        shapeOptions: ['skirt1'],
        color: '#ffffff',
        colorOptions: ['#ff0000', '#ffffff'],
        pattern: 'none',
        patternOptions: ['none'],
    },
    {
        key: 'sleeves',
        title: 'Рукава',
        shape: 'sleeves1',
        shapeOptions: ['sleeves1'],
        color: '#ffffff',
        colorOptions: ['#ff0000', '#ffffff'],
        pattern: 'none',
        patternOptions: ['none'],
    },
    {
        key: 'torso',
        title: 'Тело',
        shape: 'torso1',
        shapeOptions: ['torso1'],
        color: '#ffffff',
        colorOptions: ['#ff0000', '#ffffff'],
        pattern: 'none',
        patternOptions: ['none'],
    }
]

export const selectedElementOnDisplay = writable<string | null>(null);
