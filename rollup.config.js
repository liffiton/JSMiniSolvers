import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
    entry: 'src/minisolvers.js',
    dest: 'dist/minisolvers_umd.js',
    format: 'umd',
    moduleName: 'minisolvers',
    sourceMap: true,

    plugins: [
        commonjs({
            //include: ['src/minisolvers.js', 'src/cpp/libminisat.js'],
            // Emscripten includes code to require() fs and path
            // but only if running under Node.  Therefore, we can
            // leave those require()s unmolested.
            ignore: [ 'fs', 'path' ]
        }),
        babel({
            exclude: 'node_modules/**'
        }),
    ]
};
