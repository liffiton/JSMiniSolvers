class Solver {
    constructor(libFactory) {
        this.lib = libFactory();
        this.S = this.lib.ccall('Solver_new', 'number', []);
    }

    delete() {
        this.lib.ccall('Solver_delete', 'number', ['number'], [this.S]);
    }

    nvars() {
        return this.lib.ccall('nVars', 'number', ['number'], [this.S]);
    }

    nclauses() {
        return this.lib.ccall('nClauses', 'number', ['number'], [this.S]);
    }

    new_var() {
        return this.lib.ccall('newVar', 'number', ['number', 'number', 'number'], [this.S, 2, 1]);
    }

    add_clause(clause) {
        // TODO: checking, singleton detection (see pyminisolvers)
        return this.lib.ccall('addClause', 'number', ['number', 'number', 'array'], [this.S, clause.length, new Uint8Array(new Int32Array(clause).buffer)]);
    }

    solve() {
        return this.lib.ccall('solve', 'number', ['number'], [this.S]);
    }

    get_model() {
        var nv = this.nvars();
        var ptr = this.lib._malloc(4 * nv);
        var modelarr = this.lib.HEAP32.subarray((ptr>>2), (ptr>>2)+nv);
        this.lib.ccall('fillModel', null, ['number', 'number', 'number', 'number'], [this.S, ptr, 0, this.nvars()]);
        var model = new Int32Array(modelarr);  // copy array (can't use Array.from or TypedArray.slice() in IE11...)
        this.lib._free(ptr);
        return model;
    }
}

export {
    Solver
};

