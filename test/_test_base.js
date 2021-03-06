import test from 'ava';

export function setup_test(testedclass) {
    test.beforeEach(t => {
        t.context.s = new testedclass();
    });

    test.afterEach.always(t => {
        t.context.s.delete();
    });
}

export function run_test() {
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

    test('solve', t => {
        var s = t.context.s;
        for (var i = 0 ; i < 3 ; i++) {
            s.new_var();
        }
        s.add_clause([1, 2]);
        t.is(s.solve(), 1);
        s.add_clause([-1, 2]);
        t.is(s.solve(), 1);
        s.add_clause([1, -2]);
        t.is(s.solve(), 1);
        s.add_clause([-1, 3]);
        t.is(s.solve(), 1);
        s.add_clause([-1, -3]);
        t.is(s.solve(), 0);
    });

    test('get_model', t => {
        var s = t.context.s;
        for (var i = 0 ; i < 3 ; i++) {
            s.new_var();
        }
        s.add_clause([1, 2]);
        s.solve();
        var model = s.get_model();
        t.truthy(model[0] || model[1]);
        s.add_clause([-1, 2]);
        s.solve();
        var model = s.get_model();
        t.truthy(model[0] || model[1]);
        t.truthy(!model[0] || model[1]);
        s.add_clause([1, -2]);
        s.solve();
        var model = s.get_model();
        t.truthy(model[0] || model[1]);
        t.truthy(!model[0] || model[1]);
        t.truthy(model[0] || !model[1]);
        s.add_clause([-1, 3]);
        s.solve();
        var model = s.get_model();
        t.truthy(model[0] || model[1]);
        t.truthy(!model[0] || model[1]);
        t.truthy(model[0] || !model[1]);
        t.truthy(!model[0] || model[2]);
    });
}
