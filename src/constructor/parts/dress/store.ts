import { derived, readable, writable } from 'svelte/store';

export type Dress = DressElement[];

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

const defaultDress: Dress = [
    {
        key: 'collar',
        title: 'Воротник',
        shape: 'backCollar',
        shapeOptions: ['frontCollar', 'backCollar'],
        color: '#ffffff',
        colorOptions: ['#ff0000', '#ffffff'],
        pattern: 'none',
        patternOptions: ['none'],
    },
    {
        key: 'skirt',
        title: 'Юбка',
        shape: 'backSkirt',
        shapeOptions: ['frontSkirt', 'backSkirt'],
        color: '#ffffff',
        colorOptions: ['#00ff00', '#ffffff'],
        pattern: 'none',
        patternOptions: ['none'],
    },
    {
        key: 'sleeves',
        title: 'Рукава',
        shape: 'backSleeves',
        shapeOptions: ['frontSleeves', 'backSleeves'],
        color: '#ffffff',
        colorOptions: ['#0000ff', '#ffffff'],
        pattern: 'none',
        patternOptions: ['none'],
    },
    {
        key: 'top',
        title: 'Верх',
        shape: 'backTop',
        shapeOptions: ['frontTop', 'backTop'],
        color: '#ffffff',
        colorOptions: ['#f0f000', '#ffffff'],
        pattern: 'none',
        patternOptions: ['none'],
    },
    {
        key: 'belt',
        title: 'Пояс',
        shape: 'backBelt',
        shapeOptions: ['frontBelt', 'backBelt'],
        color: '#ffffff',
        colorOptions: ['#f0f000', '#ffffff'],
        pattern: 'none',
        patternOptions: ['none'],
    }
]

export const currentDress = readable<DressElement[]>(defaultDress);

export const selectedDressElementKey = writable<string | null>(defaultDress[0].key);

export const selectedDressElement = derived(
    [currentDress, selectedDressElementKey],
    ([$currentDress, $selectedDressElementKey]) => {
        if ($selectedDressElementKey === null) return null;

        return $currentDress.find(element => element.key === $selectedDressElementKey);
    }
);


