CXX=em++

jsfiles = libminisat.js libminicard.js

r: $(jsfiles)
d: $(jsfiles)

r: CFLAGS=-fpic -D NDEBUG -O3 --closure 1 --memory-init-file 0 -Wall -D __STDC_LIMIT_MACROS -D __STDC_FORMAT_MACROS -Wno-parentheses -Wextra --post-js postjs.txt
d: CFLAGS=-fpic -D DEBUG -O0 --closure 0 --memory-init-file 0 -Wall -D __STDC_LIMIT_MACROS -D __STDC_FORMAT_MACROS -Wno-parentheses -Wextra --post-js postjs.txt

SATINC=minisat/
CARDINC=minicard/

minisat_objects = minisat.bc minisat/minisat/core/Solver.bc minisat/minisat/utils/System.bc
libminisat.js: $(minisat_objects)
	$(CXX) $(CFLAGS) -o $@ $^

minicard_objects = minicard.bc minicard/minicard/Solver.bc minicard/utils/System.bc
libminicard.js: $(minicard_objects)
	$(CXX) $(CFLAGS) -o $@ $^

minisat.bc: minisat.cpp
	$(CXX) -c $(CFLAGS) -I $(SATINC) -o $@ $^

minicard.bc: minicard.cpp
	$(CXX) -c $(CFLAGS) -I $(CARDINC) -o $@ $^

minisat/%.bc: minisat/%.cc
	$(CXX) -c $(CFLAGS) -I $(SATINC) -o $@ $^

minicard/%.bc: minicard/%.cc
	$(CXX) -c $(CFLAGS) -I $(CARDINC) -o $@ $^

clean:
	rm -f $(jsfiles) $(minisat_objects) $(minicard_objects)

.PHONY: clean
