import lib from './cpp/libminisat.js';

class MinisatSolver {
    constructor() {
        this.S = lib.ccall('Solver_new', 'number', []);
    }

    delete() {
        lib.ccall('Solver_delete', 'number', ['number'], [this.S]);
    }

    nvars() {
        return lib.ccall('nVars', 'number', ['number'], [this.S]);
    }

    nclauses() {
        return lib.ccall('nClauses', 'number', ['number'], [this.S]);
    }

    new_var() {
        return lib.ccall('newVar', 'number', ['number', 'number', 'number'], [this.S, 2, 1]);
    }

    add_clause(clause) {
        // TODO: checking, singleton detection (see pyminisolvers)
        return lib.ccall('addClause', 'number', ['number', 'number', 'array'], [this.S, clause.length, new Uint8Array(new Int32Array(clause).buffer)]);
    }

    solve() {
        return lib.ccall('solve', 'number', ['number'], [this.S]);
    }

    get_model() {
        var nv = this.nvars();
        var ptr = lib._malloc(4 * nv);
        var modelarr = lib.HEAP32.subarray((ptr>>2), (ptr>>2)+nv);
        lib.ccall('fillModel', null, ['number', 'number', 'number', 'number'], [this.S, ptr, 0, this.nvars()]);
        var model = Array.from(modelarr);
        lib._free(ptr);
        return model;
    }
}

export {
    MinisatSolver
};
