YARN := yarn
PORT ?= 3000

.PHONY: deps install lint build run dev clean clean-build preview

deps: install

install:
	$(YARN) install

lint: install
	$(YARN) lint

build: install lint
	NODE_NO_WARNINGS=1 NEXT_TELEMETRY_DISABLED=1 $(YARN) build

dev: run

run: install
	$(YARN) dev

clean:
	rm -rf .next node_modules out

clean-build: clean install build

preview: build
	cd out && npx --yes serve -l $(PORT)
