import { readFile, writeFile } from 'fs/promises';
import { extname, dirname, join, basename } from 'path';
import { checkpath } from './utils.js';

export default function (opts = {}) {
    const options = {
        html: './src/app.html',
        // sprite: './src/assets/sprite.svg',
        obfuscator: {},
        plugin: '',
        ...opts
    };
    return {
        name: 'write',
        async setup(build) {
            build.onEnd(async ({ outputFiles }) => {
                const { initialOptions: { minify } } = build;

                const html = await readFile(options.html, { encoding: 'utf8' });
                const css = `\n\t\t<link rel="stylesheet" href="app.css">`;
                // const sprite = await readFile(options.sprite, { encoding: 'utf8' });

                for (const { path, contents, text } of outputFiles) {

                    await checkpath(dirname(path));

                    if (extname(path) === '.js') {
                        let js = text;

                        await writeFile(path, js);
                        await writeFile(join(dirname(path), 'index.html'), index);
                    } else {
                        await writeFile(path, contents);
                    }
                };
            });
        }
    };
}