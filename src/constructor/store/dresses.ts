import { collection, getDocs } from "firebase/firestore";
import { firestore } from './firebase';
import { readable } from 'svelte/store';
import type { DressFromDb } from './types';

export const dresses = readable<Promise<DressFromDb[]>>(new Promise(async (resolve, reject) => {
    try {
        const querySnapshot = await getDocs(collection(firestore, "dresses"));
        let result = [];
        querySnapshot.forEach(doc => result.push(doc.data()));
        resolve(result);
    } catch (e) {
        reject(e);
    }
}));
