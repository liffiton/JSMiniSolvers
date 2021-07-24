JSMiniSolvers
=============

JSMiniSolvers is a Javascript API and implementation of the
[MiniSat](http://minisat.se/) and [MiniCard](http://git.io/minicard) constraint
solvers.  The solvers have been compiled into Javascript with
[Emscripten](http://emscripten.org/), meaning they can run directly in a web
browser.

_[You can also use this library in standalone Javscript engine like
[Node.js](https://nodejs.org/), but in that case you are better off running
natively-compiled code by using a binary or an API that accesses native shared
libraries instead.]_

### Alternatives

 * [Logic-Solver](https://www.npmjs.com/package/logic-solver) - A higher-level
   API for creating & solving logical constraints.
 * [Research.js](https://github.com/jgalenson/research.js) - Information and
   scripts to help compile MiniSat and other solvers into Javascript.


Usage
-----

Grab the pre-compiled script and optional sourcemap from ``dist/``.  See
``example.html`` for a simple usage example.

[Try it online!](https://liffiton.github.io/JSMiniSolvers/example.html)

 
Development
-----------

### Building ``minisolvers.js``

Install dev-dependencies:

    npm install

Build:

    npm run build

Test:

    npm test

### Re-building ``src/cpp/libmini*.js``

The repository contains pre-compiled javascript versions of MiniSat and
MiniCard, so you can build the ``minisolvers.js`` library without needing to
install or use Emscripten.  If you would like to modify the C++ source of
either solver and recompile it, however, you will need to [install
Emscripten](https://emscripten.org/docs/getting_started/downloads.html).

Then, in the ``src/cpp`` directory:

    make

Or to build a debug version (unoptimizied, unminified):

    make d


License
-------

This code is licensed under the MIT license.  See LICENSE for details.
