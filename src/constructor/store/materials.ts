import { collection, getDocs } from "firebase/firestore";
import { firestore } from './firebase';
import { readable } from 'svelte/store';
import type { MaterialFromDb } from './types';

export const materials = readable<Promise<MaterialFromDb[]>>(new Promise(async (resolve, reject) => {
    try {
        const querySnapshot = await getDocs(collection(firestore, "materials"));
        let result = [];
        querySnapshot.forEach(doc => result.push(doc.data()));
        resolve(result);
    } catch (e) {
        reject(e);
    }
}));
