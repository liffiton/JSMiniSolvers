CXX=em++

jsfiles = libminisat.js libminicard.js

r: $(jsfiles)
d: $(jsfiles)

CFLAGS_REG=-fpic -Wall -Wno-parentheses -Wextra
CFLAGS_EMSCRIPTEN=--memory-init-file 0 -D __STDC_LIMIT_MACROS -D __STDC_FORMAT_MACROS --post-js postjs.txt -s ALLOW_MEMORY_GROWTH=1
CFLAGS_SHARED=$(CFLAGS_REG) $(CFLAGS_EMSCRIPTEN)
r: CFLAGS=-D NDEBUG -O3 --closure 1 $(CFLAGS_SHARED)
d: CFLAGS=-D DEBUG -O0 --closure 0 -s ASSERTIONS=1 $(CFLAGS_SHARED)

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
