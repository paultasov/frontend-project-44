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
brain-progression: # run Brain Progression Game
	node bin/brain-progression.js
brain-prime: # run Brain Prime Game
	node bin/brain-prime.js
publish: # publish in npm registry
	npm publish --dry-run
lint: # check code with ESLint
	npx eslint .