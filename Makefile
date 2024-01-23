install: # clean install
	npm ci
brain-games: # run brain-games.js
	node bin/brain-games.js
publish: # publish in npm registry
	npm publish --dry-run