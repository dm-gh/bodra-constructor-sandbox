import { collection, getDocs } from "firebase/firestore";
import { firestore } from './firebase';
import { readable } from 'svelte/store';
import type { ShapeFromDb } from './types';

export const shapes = readable<Promise<ShapeFromDb[]>>(new Promise(async (resolve, reject) => {
    try {
        const querySnapshot = await getDocs(collection(firestore, "shapes"));
        let result = [];
        querySnapshot.forEach(doc => result.push(doc.data()));
        resolve(result);
    } catch (e) {
        reject(e);
    }
}));
