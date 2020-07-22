import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';
import image from '@rollup/plugin-image';
import commonjs from '@rollup/plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
import babel from 'rollup-plugin-babel'
// add typescript plugin to imports
// import preprocess
import preprocess from 'svelte-preprocess';


export default {
	input: 'src/index.js',
	output: {
		file: 'dist/index.mjs',
		format: 'esm'
	},

	plugins: [
		svelte({
			extensions: [".svelte"],
			preprocess: preprocess()
		}),

		resolve(),
		babel({
			exclude: ['node_modules/**']
		}),
		image(),
		commonjs()
	]
};
