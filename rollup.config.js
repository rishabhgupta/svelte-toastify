import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';
import image from '@rollup/plugin-image';
import commonjs from '@rollup/plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
// add typescript plugin to imports
import typescript from '@rollup/plugin-typescript';
// import preprocess
import preprocess from 'svelte-preprocess';


const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase());

export default {
	input: 'src/index.js',
	browser: true,
	output: [
		{ file: pkg.module, 'format': 'es' },
		{ file: pkg.main, 'format': 'umd', name },
		{ file: pkg.main.replace('.js', '.min.js'), format: 'iife', name, plugins: [terser()] }
	],
	plugins: [
		svelte({
			extensions: [".svelte"],
			preprocess: preprocess()
		}),
		typescript(),
		resolve(),
		builtins(),
		image(),
		commonjs()
	]
};
