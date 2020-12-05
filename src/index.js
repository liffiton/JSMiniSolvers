import libminisatFactory from './cpp/libminisat.js';
import libminicardFactory from './cpp/libminicard.js';
import {Solver} from './solver_base.js';

class MinisatSolver extends Solver {
    constructor() {
        super(libminisatFactory);
    }
}


class MinicardSolver extends Solver {
    constructor() {
        super(libminicardFactory);
    }
}

export {
    MinisatSolver,
    MinicardSolver
};
