create-pj:
	vue create project

start-pj:
	yarn install && yarn build

local:
	yarn serve

lint:
	yarn lint

lint-fix:
	yarn lint --fix

test:
	yarn test:unit

mock:
	yarn mock:build

cache-clean:
	yarn cache clean

ci:
	circleci build
