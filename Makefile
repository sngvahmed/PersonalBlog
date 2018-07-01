
default: help ;
RED    := $(shell tput -Txterm setaf 1)
GREEN  := $(shell tput -Txterm setaf 2)
WHITE  := $(shell tput -Txterm setaf 7)
YELLOW := $(shell tput -Txterm setaf 3)
RESET  := $(shell tput -Txterm sgr0)

# CLEAN
info:##@CLEAN clean cello and celloutils frontend & backend
	@echo "Github https://github.com/sngvahmed/PersonalBlog"
	@echo "Board link https://app.pipefy.com/pipes/498001"
	@echo "React-Bootstrap https://reactstrap.github.io/components/alerts/"
	

install-frontend:##@FRONTEND npm install frontend
	@./scripts/frontend/install-frontend.sh

run-frontend:##@FRONTEND start frontend 
	@./scripts/frontend/run-frontend.sh

build-frontend:##@FRONTEND get produciton for frontend
	@./scripts/frontend/build-frontend.sh
	
HELP_FUN = \
	%help; \
	while(<>) { push @{$$help{$$2 // 'options'}}, [$$1, $$3] if /^([a-zA-Z\-]+)\s*:.*\#\#(?:@([a-zA-Z\-]+))?\s(.*)$$/ }; \
	print "usage: make [target]\n\n"; \
	for (sort keys %help) { \
	print "${WHITE}$$_:${RESET}\n"; \
	for (@{$$help{$$_}}) { \
	$$sep = " " x (32 - length $$_->[0]); \
	print "  ${YELLOW}$$_->[0]${RESET}$$sep${GREEN}$$_->[1]${RESET}\n"; \
	}; \
	print "\n"; }


help: ##@OTHER Show this help.
	@perl -e '$(HELP_FUN)' $(MAKEFILE_LIST)


