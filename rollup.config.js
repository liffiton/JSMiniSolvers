
import commonjs from 'rollup-plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from "rollup-plugin-terser";

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/minisolvers.js',
        format: 'umd',
        name: 'minisolvers',
        sourcemap: true,
    },
    plugins: [
        // use rollup-plugin-commonjs to enable "import" of emscripten code
        commonjs({
            // Emscripten includes code to require() fs and path
            // but only if running under Node.  Therefore, we can
            // leave those require()s unmolested.
            ignore: [ 'fs', 'path' ]
        }),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled'
        }),
        terser(),
    ]
};
