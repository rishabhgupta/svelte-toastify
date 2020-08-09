import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel'
// add typescript plugin to imports
// import preprocess
import preprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';


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
		typescript(),
		resolve(),
		babel({
			exclude: ['node_modules/**']
		}),
		image(),
		commonjs()
	]
};
