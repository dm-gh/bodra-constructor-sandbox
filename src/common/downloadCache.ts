import { getStorage, ref, getDownloadURL } from "firebase/storage";

function makeFetchWithCache(): (input: string) => Promise<Response> {
    const cache: {[input: string]: Promise<Response>} = {};

    return (input) => {
        if (cache[input] !== undefined) return cache[input];

        const req = fetch(input);
        cache[input] = req;
        return req;
    }
}

export const fetchWithCache = makeFetchWithCache();

function makeGetDownloadURLWithCache(): (path: string) => Promise<string> {
    const cache: {[path: string]: Promise<string>} = {};

    return (path) => {
        if (cache[path] !== undefined) return cache[path];

        const req = getDownloadURL(ref(getStorage(), path));
        cache[path] = req;
        return req;
    }
}

export const getDownloadURLWithCache = makeGetDownloadURLWithCache();

function makeGetBlobStringFromStorageWithCache(): (path: string) => Promise<string> {
    const cache: {[path: string]: string} = {};

    return async (path) => {
        if (cache[path] !== undefined) return cache[path];

        const downloadUrl = await getDownloadURLWithCache(path)
        const response = await fetchWithCache(downloadUrl);
        const blob =  await response.blob();
        cache[path] = await blob.text();
        return cache[path];
    }
}

export const getBlobStringFromStorageWithCache = makeGetBlobStringFromStorageWithCache();
