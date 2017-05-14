import test from 'ava';

import {MinisatSolver} from '../dist/minisolvers_umd.js';

test.beforeEach(t => {
    t.context.s = new MinisatSolver();
});

test.afterEach(t => {
    t.context.s.delete();
});

test('Solver_new', t => {
    var s = t.context.s;
    t.truthy(s);
    t.truthy(s.S);
    t.is(s.nvars(), 0);
    t.is(s.nclauses(), 0);
});

test('new_var', t => {
    var s = t.context.s;
    for (var i = 0 ; i < 10 ; i++) {
        t.is(s.nvars(), i);
        s.new_var();
        t.is(s.nvars(), i+1);
    }
});

test('add_clause', t => {
    var s = t.context.s;
    for (var i = 0 ; i < 10 ; i++) {
        s.new_var();
    }
    var clause = [1];
    // adding a unit clause does not increase nclauses
    t.is(s.nclauses(), 0);
    s.add_clause(clause);
    t.is(s.nclauses(), 0);
    // adding longer clauses increments nclauses
    clause[0] = 2;
    clause.push(0);  // placeholder
    for (var i = 0 ; i < 8 ; i++) {
        t.is(s.nclauses(), i);
        clause[1] = i+3;
        s.add_clause(clause);
        t.is(s.nclauses(), i+1);
    }
});

