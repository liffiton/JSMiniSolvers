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
}

export {
    MinisatSolver
};
