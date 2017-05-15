import libminisat from './cpp/libminisat.js';
import libminicard from './cpp/libminicard.js';
import {Solver} from './solver_base.js';

class MinisatSolver extends Solver {
    constructor() {
        super(libminisat);
    }
}


class MinicardSolver extends Solver {
    constructor() {
        super(libminicard);
    }
}

export {
    MinisatSolver,
    MinicardSolver
};
