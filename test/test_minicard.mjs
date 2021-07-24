// Slightly convoluted workaround for importing by name from a CommonJS module
import pkg from '../dist/minisolvers.js';
const {MinicardSolver} = pkg;

import {setup_test, run_test} from './_test_base.mjs';

setup_test(MinicardSolver);
run_test();
