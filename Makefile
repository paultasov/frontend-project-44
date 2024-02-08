install: # clean install
	npm ci
brain-games: # run brain-games.js
	node bin/brain-games.js
brain-even: # run Brain Even Game
	node bin/brain-even.js
brain-calc: # run Brain Calc Game
	node bin/brain-calc.js
brain-gcd: # run Brain GCD Game
	node bin/brain-gcd.js
publish: # publish in npm registry
	npm publish --dry-run
lint: # check code with ESLint
	npx eslint .