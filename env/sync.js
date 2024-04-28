import { cp, watch, rm } from 'fs/promises';
import { join, resolve } from 'path';

export default async function (options = { include: [''], exclude: [''] }, dev = false) {
    const { include, exclude } = options;

    for (const [from, to] of include) {
        await copy(from, to);
    };

    if (dev) {
        const watcher = watch('src', { recursive: true });

        for await (const { eventType, filename } of watcher) {
            const changed = resolve(join('src', filename));
            const existPath = include?.find(([from, to]) => {
                return changed.includes(resolve(from));
            });
            if (existPath) {
                const [from, to, exclude] = existPath;
                await clear(to);
                await copy(from, to, exclude);
            }
        }
    }

    async function clear(path) {
        try {
            await rm(resolve(path), { recursive: true, force: true });
        } catch (e) {
            console.error(path);
        }
    };

    async function copy(from, to) {
        try {
            await cp(resolve(from), resolve(to), {
                dereference: true,
                recursive: true,
                force: true,
                filter
            });
        } catch (e) {
            console.error(e);
        }
    }

    function filter(src, dest) {
        return !exclude?.some(ex => src.includes(ex));
    }
}