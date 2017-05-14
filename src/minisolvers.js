import libminisat from './cpp/libminisat.js';

class MinisatSolver {
    constructor() {
        this.S = libminisat.ccall('Solver_new', 'number', []);
    }

    delete() {
        libminisat.ccall('Solver_delete', 'number', ['number'], [this.S]);
    }

    nvars() {
        return libminisat.ccall('nVars', 'number', ['number'], [this.S]);
    }

    nclauses() {
        return libminisat.ccall('nClauses', 'number', ['number'], [this.S]);
    }

    new_var() {
        return libminisat.ccall('newVar', 'number', ['number', 'number', 'number'], [this.S, 2, 1]);
    }

    add_clause(clause) {
        // TODO: checking, singleton detection (see pyminisolvers)
        return libminisat.ccall('addClause', 'number', ['number', 'number', 'array'], [this.S, clause.length, new Uint8Array(new Int32Array(clause).buffer)]);
    }

    solve() {
        return libminisat.ccall('solve', 'number', ['number'], [this.S]);
    }

    get_model() {
        var nv = this.nvars();
        var ptr = libminisat._malloc(4 * nv);
        var modelarr = libminisat.HEAP32.subarray((ptr>>2), (ptr>>2)+nv);
        libminisat.ccall('fillModel', null, ['number', 'number', 'number', 'number'], [this.S, ptr, 0, this.nvars()]);
        var model = Array.from(modelarr);
        libminisat._free(ptr);
        return model;
    }
}

export {
    MinisatSolver
};
