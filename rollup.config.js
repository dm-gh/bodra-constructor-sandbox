import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only';
import inlineSvg from 'rollup-plugin-inline-svg';

const production = !process.env.ROLLUP_WATCH;

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}


function makeConfig(input, name, extraPlugins) {
    return {
        input: input,
        output: {
            sourcemap: true,
            format: 'iife',
            name: 'app',
            file: `public/build/${name}.js`
        },
        plugins: [
            svelte({
                preprocess: sveltePreprocess({ sourceMap: !production }),
                compilerOptions: {
                    // enable run-time checks when not in production
                    dev: !production
                }
            }),

            inlineSvg({
                // Removes specified tags and its children. You can specify tags by setting removingTags query array.
                // default: false
                removeTags: false,
                // warning: this won't work unless you specify removeTags: true
                // default: ['title', 'desc', 'defs', 'style']
                removingTags: [],
                // warns about present tags, ex: ['desc', 'defs', 'style']
                // default: []
                warnTags: [],
                // Removes `width` and `height` attributes from <svg>.
                // default: true
                removeSVGTagAttrs: false,
                // Removes attributes from inside the <svg>.
                // default: []
                removingTagAttrs: [],
                // Warns to console about attributes from inside the <svg>.
                // default: []
                warnTagAttrs: []
            }),

            // we'll extract any component CSS out into
            // a separate file - better for performance
            css({ output: `${name}.css` }),

            // If you have external dependencies installed from
            // npm, you'll most likely need these plugins. In
            // some cases you'll need additional configuration -
            // consult the documentation for details:
            // https://github.com/rollup/plugins/tree/master/packages/commonjs
            resolve({
                browser: true,
                dedupe: ['svelte']
            }),
            commonjs(),
            typescript({
                sourceMap: !production,
                inlineSources: !production
            }),

            ...(extraPlugins ?? []),

            // If we're building for production (npm run build
            // instead of npm run dev), minify
            production && terser()
        ],
    }
}

export default [
    makeConfig('src/constructor/main.ts', 'constructor'),
    {
        ...makeConfig('src/app/main.ts', 'app', [

            // In dev mode, call `npm run start` once
            // the bundle has been generated
            !production && serve(),

            // Watch the `public` directory and refresh the
            // browser on changes when not in production
            !production && livereload('public'),
        ]),
        watch: {
            clearScreen: false
        }
    }
];
