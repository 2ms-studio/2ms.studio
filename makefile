# get at local binaries  ############################

export PATH := node_modules/.bin:$(PATH)
export SHELL := /usr/bin/env bash

.PHONY: dev
dev: clear check-nvm install
	$(call log,Starting Next.js)
	$(call nvm-exec, yarn next)

.PHONY: upload
upload:
	$(call log,Uploading images)
	@node ./lib/image_upload.js

# helpers ############################################

.PHONY: clear
clear:
	@clear

.PHONY: install
install: check-nvm
	$(call log,Refreshing dependencies)
	$(call nvm-exec, yarn -s)

.PHONY: check-nvm
check-nvm:
	$(call log,Checking node)
	$(call with-nvm, type -t nvm > /dev/null || { echo -e "\x1b[31mYou need to install NVM:\x1b[0m https://github.com/creationix/nvm#installation-and-update"; exit 1; })

# messaging #########################################

define log
    @echo -e "\x1b[2m$(1)\x1b[0m"
endef

define error
    @echo -e "\x1b[31m$(1)\x1b[0m"
endef

define with-nvm
	@bash -l -c '. ~/.nvm/nvm.sh && $(1)'
endef

define nvm-exec
	$(call with-nvm, nvm exec --silent $(1))
endef