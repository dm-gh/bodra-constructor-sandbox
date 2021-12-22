type DressGeneric<Part> = {
    id: string;
    title: string;
    description: string;
    basePrice: number;
    parts: Part[];
}

export type MaterialFromDb = {
    id: string;
    title: string;
    description: string;
    imagePath: string;
    price: number;
}

export type ShapeFromDb = {
    id: string;
    title: string;
    description: string;
    svgPath: string;
    price: number;
}

export type DressFromDb = DressGeneric<{ id: string, options: string[] }>

export type DressPart = { id: string; options: string[]; shape: ShapeFromDb, material: MaterialFromDb };

export type DressFromRuntime = DressGeneric<DressPart>

export type DressModification = {
    shape?: string; // shape option id
    material?: string; // material option id
}

export enum DressSide {
    BACK = 'back',
    FRONT = 'front',
}
