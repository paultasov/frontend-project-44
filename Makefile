install: # clean install
	npm ci
brain-games: # run brain-games.js
	node bin/brain-games.js
brain-even: # run brain-even.js
	node bin/brain-even.js
publish: # publish in npm registry
	npm publish --dry-run
lint: # check code with ESLint
	npx eslint .