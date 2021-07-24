// Slightly convoluted workaround for importing by name from a CommonJS module
import pkg from '../dist/minisolvers.js';
const {MinisatSolver} = pkg;

import {setup_test, run_test} from './_test_base.mjs';

setup_test(MinisatSolver);
run_test();
