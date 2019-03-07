.PHONY: dev
dev: clear check-nvm install
	$(call log,Starting Next.js)
	@bash -l -c 'nvm exec --silent next'

# helpers ############################################

.PHONY: clear
clear:
	@clear

.PHONY: install
install: check-nvm
	$(call log,Refreshing dependencies)
	@bash -l -c 'nvm exec --silent yarn -s'

.PHONY: check-nvm
check-nvm:
	$(call log,Checking node)
	@bash -l -c 'type -t nvm > /dev/null || { echo -e "\x1b[31mYou need to install NVM:\x1b[0m https://github.com/creationix/nvm#installation-and-update"; exit 1; }'

# messaging #########################################

define log
    @echo -e "\x1b[2m$(1)\x1b[0m"
endef

define error
    @echo -e "\x1b[31m$(1)\x1b[0m"
endef

# get at local binaries  ############################

export PATH := node_modules/.bin:$(PATH)
export SHELL := /usr/bin/env bash
